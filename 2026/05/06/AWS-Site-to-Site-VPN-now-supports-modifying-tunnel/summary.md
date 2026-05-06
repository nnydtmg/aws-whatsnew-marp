# AWS Site-to-Site VPN now supports modifying tunnel bandwidth on existing VPN connections

**カテゴリ:** What's New
**公開日:** 2026-05-06
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/05/aws-site-to-site-vpn-modify-bandwidth/](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-site-to-site-vpn-modify-bandwidth/)

---

## 要約

AWS Site-to-Site VPN は、既存の VPN 接続のトンネル帯域幅をスタンダードからラージに変更できる新機能をリリースしました。この機能により、IP アドレスや設定を保持したままアップグレードが可能となり、オンプレミス デバイスの設定変更が不要になります。

## 詳細

- AWS Site-to-Site VPN は、既存の VPN 接続のトンネル帯域幅をスタンダード（最大 1.25 Gbps）とラージ（最大 5 Gbps）の間で変更できるようになりました。
- 以前は、トンネル帯域幅を変更するには接続を削除して再作成する必要があり、新しいトンネル IP アドレスが生成されてオンプレミスの VPN デバイス設定とファイアウォール ルールの更新が必要でした。
- この新機能により、トンネルは IP アドレス、CIDR ブロック、事前共有鍵、およびすべての設定を保持したまま アップグレードされます。
- オンプレミス デバイスの設定変更が不要になりました。
- この機能は、米国東部（バージニア州、オハイオ州）、米国西部（北カリフォルニア州）、AWS GovCloud（US-West）、ヨーロッパ（フランクフルト、ロンドン、パリ、スペイン、ストックホルム）、アジアパシフィック（香港、ハイデラバード、ジャカルタ、マレーシア、ムンバイ、ニュージーランド、大阪、ソウル、シドニー、台北、タイ、東京）、アフリカ（ケープタウン）、メキシコ（中央）、南米（サンパウロ）の AWS リージョンで利用可能です。