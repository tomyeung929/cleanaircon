const money = (amount) => `HK$${Number(amount).toLocaleString("zh-HK")}`;

function quote(machine, service, qty) {
  const count = Math.min(50, Math.max(1, Math.trunc(Number(qty)) || 1));
  const unit = service === "repair" ? machine.washRepairPrice : machine.washPrice;
  const discountEach = count >= 2 ? 50 : 0;
  return { qty: count, unit, discountEach, total: (unit - discountEach) * count };
}

function serviceLabel(service) {
  return service === "repair" ? "洗+維修" : "洗冷氣";
}

function message(fields) {
  const lines = ["我想預約洗冷氣"];
  if (fields.name) lines.push(`姓名：${fields.name}`);
  if (fields.phone) lines.push(`電話：${fields.phone}`);
  if (fields.address) lines.push(`地址：${fields.address}`);
  if (fields.date) lines.push(`方便日期：${fields.date}`);
  lines.push(`機型：${fields.machineName}`);
  lines.push(`服務：${serviceLabel(fields.service)}`);
  lines.push(`數量：${fields.qty} 部`);
  lines.push(`預計費用：${money(fields.total)}`);
  if (fields.discountEach) lines.push(`已計多部優惠：每部減 ${money(fields.discountEach)}`);
  lines.push("最終以上門檢查為準。");
  return lines.join("\n");
}

function setupForm(form) {
  const machines = JSON.parse(form.dataset.machines);
  const waBase = form.dataset.wa;
  const mode = form.dataset.mode;
  const typeInput = form.querySelector("[data-type]");
  const serviceInput = form.querySelector("[data-service]");
  const qtyInput = form.querySelector("[data-qty]");
  const totalEl = form.querySelector("[data-total]");
  const unitEl = form.querySelector("[data-unit]");
  const discountEl = form.querySelector("[data-discount]");
  const contactLink = form.querySelector("[data-contact]");
  const waLink = form.querySelector("[data-wa-link]");
  const errorEl = form.querySelector("[data-error]");
  const statusEl = form.querySelector("[data-status]");

  const current = () => {
    const machine = machines.find((item) => item.slug === typeInput.value) || machines[0];
    const service = serviceInput.value === "repair" ? "repair" : "wash";
    const priced = quote(machine, service, qtyInput.value);
    return { machine, service, ...priced };
  };

  const params = new URLSearchParams(window.location.search);
  const requestedType = params.get("type");
  const requestedService = params.get("service");
  const requestedQty = Number(params.get("qty"));
  if (requestedType && [...typeInput.options].some((option) => option.value === requestedType)) {
    typeInput.value = requestedType;
  }
  if (requestedService === "wash" || requestedService === "repair") {
    serviceInput.value = requestedService;
  }
  if (requestedQty >= 1) qtyInput.value = String(Math.min(50, Math.trunc(requestedQty)));

  const paint = () => {
    const state = current();
    if (unitEl) unitEl.textContent = `單價 ${money(state.unit)}／部 · ${serviceLabel(state.service)}`;
    if (totalEl) totalEl.textContent = money(state.total);
    if (discountEl) {
      discountEl.hidden = state.discountEach === 0;
      discountEl.textContent = `兩部或以上，每部減 ${money(state.discountEach)}，合共減 ${money(state.discountEach * state.qty)}`;
    }
    const params = new URLSearchParams({
      type: state.machine.slug,
      service: state.service,
      qty: String(state.qty),
    });
    if (contactLink) contactLink.href = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/contact?${params.toString()}`;
    if (waLink) {
      waLink.href = `${waBase}?text=${encodeURIComponent(
        message({
          machineName: state.machine.name,
          service: state.service,
          qty: state.qty,
          total: state.total,
          discountEach: state.discountEach,
        }),
      )}`;
    }
    return state;
  };

  form.addEventListener("input", paint);
  form.addEventListener("change", (event) => {
    if (event.target === qtyInput) qtyInput.value = String(current().qty);
    paint();
  });
  paint();

  if (mode !== "full") {
    form.addEventListener("submit", (event) => event.preventDefault());
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const state = paint();
    const name = form.querySelector("[data-name]")?.value.trim() ?? "";
    const phone = form.querySelector("[data-phone]")?.value.trim() ?? "";
    const address = form.querySelector("[data-address]")?.value.trim() ?? "";
    const date = form.querySelector("[data-date]")?.value ?? "";
    const validPhone = /^\d{8}$/.test(phone);

    if (!name || !validPhone || !address || state.qty < 1) {
      errorEl.hidden = false;
      errorEl.textContent = validPhone
        ? "請填齊姓名、聯絡電話同服務地址。"
        : "請填有效嘅 8 位香港電話號碼。";
      statusEl.hidden = true;
      const focusTarget = !name
        ? form.querySelector("[data-name]")
        : !validPhone
          ? form.querySelector("[data-phone]")
          : form.querySelector("[data-address]");
      focusTarget?.focus();
      return;
    }

    errorEl.hidden = true;
    const href = `${waBase}?text=${encodeURIComponent(
      message({
        name,
        phone,
        address,
        date,
        machineName: state.machine.name,
        service: state.service,
        qty: state.qty,
        total: state.total,
        discountEach: state.discountEach,
      }),
    )}`;
    if (waLink) {
      waLink.href = href;
      waLink.hidden = false;
    }
    statusEl.hidden = false;
    statusEl.textContent = "請喺 WhatsApp 發送訊息，再等我哋確認日期，先算預約成功。如果未能打開，請用下方連結繼續。";
    window.open(href, "_blank", "noopener,noreferrer");
  });
}

export function setupEstimates() {
  document.querySelectorAll("[data-estimate]").forEach(setupForm);
}
