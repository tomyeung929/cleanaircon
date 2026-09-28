import { hkd, machines, quotedSeparately, site, washIncludes } from "../data/site.js";

export function GET() {
  const windowUnit = machines.find((item) => item.slug === "window-ac");
  const splitUnit = machines.find((item) => item.slug === "split-wall");
  const prices = machines
    .map((machine) => {
      const note = machine.priceFrom ? "，最終睇位" : "";
      return `- ${machine.name}（${machine.where}）：洗冷氣 ${hkd(machine.washPrice)} 起；洗+維修 ${hkd(machine.washRepairPrice)} 起${note}`;
    })
    .join("\n");
  const body = `# ${site.name}

> ${site.name}（${site.nameEn}）提供全港 18 區上門洗冷氣同洗冷氣+維修。窗口機 ${hkd(windowUnit.washPrice)} 起，分體機 ${hkd(splitUnit.washPrice)} 起。完工保養 ${site.warrantyDays} 日。先報價後開工。

## 聯絡
- 電話：${site.phoneDisplay}
- WhatsApp：${site.whatsappDisplay}
- 營業時間：${site.hours}
- 預約：${site.url}/contact

## 收費（每部，港幣）
${prices}

## 優惠
- 同一地址兩部或以上同時清洗，每部減 ${hkd(site.multiUnitDiscount)}

## 清洗包括
${washIncludes.map((item) => `- ${item}`).join("\n")}

## 可能另計
${quotedSeparately.map((item) => `- ${item}`).join("\n")}

## 服務範圍
${site.area}

## 預約說明
預計費用由機型同數量計出。最終以上門檢查為準。維修零件同加雪種開工前另報。
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
