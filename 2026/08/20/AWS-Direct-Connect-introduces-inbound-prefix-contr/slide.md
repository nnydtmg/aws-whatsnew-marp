---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Direct Connect にプレフィックスコントロール機能が登場

AWS Direct Connect introduces inbound prefix controls and higher prefix scale

**What's New** | 2026-08-20T15:00:00

---

## 概要

- AWS Direct Connectのインバウンドプレフィックスコントロール機能により、VIFあたりのプレフィックス割り当て上限が100個から1,000個に拡大され、追加費用なく利用できるようになりました。
- この機能は、大規模なネットワークを持つ組織やネットワーク拡張を予定している企業にとって、ルート管理の複雑性を軽減し、より効率的な設計が可能になる点で特に有益です。

---

## 前提・背景

### これまでの課題

- 従来は、プライベートまたはトランジットVIF上でオンプレミスネットワークからAWSに通知されるルートプレフィックスの最大数が100個に制限されていました。


---

## 変更内容・新機能

- AWS Direct Connectは、プライベート仮想インターフェース（VIF）とトランジット仮想インターフェース（VIF）のインバウンドルートプレフィックス割り当てを管理できる新しい機能「インバウンドプレフィックスコントロール」を発表いたしました。

- この新機能により、専用接続とホスト型接続上のVIFで、IPv4とIPv6それぞれ最大1,000個のプレフィックスを割り当てることが可能になりました。

---

## まとめ

- AWS Direct Connect introduces inbound prefix controls and higher prefix scale について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-direct-connect-new-prefix-controls)
