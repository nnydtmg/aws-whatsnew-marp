---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# CloudFront BYOIP for IPv6
VPC IPAM統合による自社IPアドレスの利用

**発表日: 2026年3月31日**

---

## 概要

### CloudFront BYOIP IPv6サポートの3つのポイント

- **IPv6対応**: BYOIP機能がIPv6（/48ブロック）に拡張
- **VPC IPAM統合**: ネットワーク管理がシンプル化
- **デュアルスタック構成**: IPv4（/24）とIPv6（/48）を同時利用可能

### 主な効果

- 既存のIPアドレススペースを維持
- セキュリティと管理の簡素化
- IPv4/IPv6両方のクライアント対応

---

<!-- _class: section -->

# 1. 前提・背景

なぜIPv6 BYOIP対応が必要なのか

---

## グローバル化する企業の課題

### これまでの制限

- CloudFront BYOIP機能は**IPv4（/24）のみ**対応
- IPv6トラフィックはAWS提供のアドレスに依存
- デュアルスタック環境での運用が複雑化

### エンタープライズ環境の要件

- IPアドレスの統一的な管理
- ファイアウォール・セキュリティポリシーの一貫性
- レガシーシステムとの互換性維持

---

## VPC IPAMの進化

### VPC IPAMの概要

- AWS内のIPアドレス割り当て・管理の統合ソリューション
- BYOIP（Bring Your Own IP）機能をサポート
- 複数のAWSサービスで利用可能

### CloudFront BYOIP の段階的展開

1. **2025年11月**: VPC IPAM統合、IPv4 BYOIP対応
2. **2026年3月31日**: **IPv6 BYOIP対応を発表（本更新）**
3. 今後: さらなるAWSサービスへの拡大予定

---

<!-- _class: section -->

# 2. 変更内容・新機能

CloudFront BYOIP for IPv6の詳細

---

## IPv6 BYOIP対応

### 対応するIPアドレスブロック

| プロトコル | ブロックサイズ | 説明 |
|---------|------------|------|
| IPv4 | /24 | 従来対応 |
| **IPv6** | **/48** | **新規対応（本更新）** |

### CloudFront Anycast Static IPs

- CloudFrontディストリビューションで自社のIPアドレスを利用
- 複数のCloudFrontエッジロケーションに展開
- Anycasting により最寄りのエッジへのルーティングが最適化

---

## VPC IPAM統合による利点

### 管理の簡素化

- **一元管理**: CloudFront以外のIPAMリソースと同じダッシュボードで管理
- **自動割り当て**: IPAM内でCIDRを自動管理
- **監査ログ**: IPアドレス利用状況の追跡

### セキュリティの向上

- 専定のIPアドレスリストをパートナー・顧客に提供可能
- ホワイトリスト管理がシンプル化
- ブランディングとセキュリティポリシーの統一

---

## 既存環境への影響

### 互換性の維持

- ✅ 既存のIPv4 BYOIP設定は変更不要
- ✅ IPv4とIPv6の**デュアルスタック構成**で動作
- ✅ 既存のホワイトリスト・ファイアウォールルール継続利用

### リージョン対応

- 対応リージョン: **ほぼ全商用AWSリージョン**
- 非対応リージョン:
  - 中東（バーレーン）
  - 中東（UAE）
  - AWS GovCloud（US）
  - 中国地域

---

<!-- _class: section -->

# 3. 効果・メリット

CloudFront BYOIP for IPv6がもたらす価値

---

## ビジネスメリット

### 1. 運用の効率化

- 💼 IPアドレス管理の一元化
- 💼 ネットワークチームの負担軽減
- 💼 セキュリティレビューの簡素化

### 2. セキュリティ強化

- 🔒 ホワイトリスト対応が容易
- 🔒 IPアドレスの来歴追跡が可能
- 🔒 未認可トラフィックの検出が効率的

---

## 技術的なメリット

### 3. スケーラビリティ向上

- 🚀 IPv6の広大なアドレス空間を活用
- 🚀 将来のIoT/デバイス拡大に対応
- 🚀 グローバルなトラフィック最適化

### 4. 互換性の維持

- ✓ レガシーシステムとの共存
- ✓ クライアント側の変更不要
- ✓ 段階的な移行が可能

---

<!-- _class: section -->

# 4. ユースケース

実際の適用シーン

---

## グローバルCDN企業

### 課題

顧客からの「IPアドレス指定配信」要求に、IPv6非対応で対応困難

### 解決策

✅ CloudFront BYOIP for IPv6を活用

- 顧客の自社IPアドレス（IPv6）をホワイトリスト化
- CloudFront Anycast Static IPsで配信
- セキュリティ要件を満たしつつコスト最適化

---

## 金融機関・医療機関

### 課題

厳格なセキュリティポリシーで、特定IPアドレス範囲からのアクセスのみ許可

### 解決策

✅ デュアルスタック環境で対応

- IPv4: 従来のBYOIP (/24)
- IPv6: 新しいBYOIP (/48)
- 単一のCloudFrontディストリビューションで両方に対応

---

## 通信キャリア

### 課題

IPv6への急速な移行に伴い、IPv6専用配信要件が増加

### 解決策

✅ IPv6 BYOIP by VPC IPAM

- キャリアの自社IPv6アドレス範囲を指定
- ネットワーク管理の最適化
- 将来のIPv6-only環境への先制対応

---

<!-- _class: section -->

# 5. まとめ

CloudFront BYOIP for IPv6の位置付け

---

## 本更新のまとめ

### 何が変わったか

| 項目 | 従来 | 今回の更新 |
|------|------|----------|
| IPv4 | ✓ (/24) | ✓ (/24) |
| **IPv6** | **✗** | **✓ (/48)** |
| 管理方法 | 個別設定 | VPC IPAM統合 |
| デュアルスタック | × | **✓** |

### 次のステップ

1. **評価フェーズ**
   - 自社IPv6アドレスの確認
   - VPC IPAM設定のプレビュー

2. **パイロット実装**
   - 限定的なディストリビューションで試行
   - パフォーマンス・セキュリティ検証

3. **本番展開**
   - 段階的なトラフィック移行
   - 従来システムとの共存確認

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/cloudfront-byoip-ipv6-vpc-ipam/

### CloudFront BYOIP 関連ドキュメント

- [Bring your own IP to CloudFront using IPAM](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/bring-your-own-ip-address-using-ipam.html)
- [Bring your own IP to CloudFront using IPAM (VPC IPAM ドキュメント)](https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-byoip-cloudfront.html)
- [Bring your own IPv6 CIDR to IPAM](https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-byoip-ipam-console-ipv6.html)

### 関連記事

- [AWS記事: Amazon CloudFront integrates with VPC IPAM to support BYOIP](https://aws.amazon.com/about-aws/whats-new/2025/11/vpc-ipam-cloudfront-byoip/)
- [Bring Your Own IP to CloudFront: Solving Enterprise Connectivity Challenges](https://repost.aws/articles/ARKCy25E6wSBaKDhY9PCsyXQ/bring-your-own-ip-to-cloudfront-solving-enterprise-connectivity-challenges)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**