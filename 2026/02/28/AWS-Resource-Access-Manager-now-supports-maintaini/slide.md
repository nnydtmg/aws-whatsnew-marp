---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Resource Access Manager
アカウント移動時にリソース共有を維持

**発表日: 2026年2月27日**

---

## 概要

### AWS RAM の新機能

- **RetainSharingOnAccountLeaveOrganization** パラメータを導入
- アカウントがAWS Organizations間を移動する際にリソース共有を継続
- M&Aや組織再編時にリソースアクセスを中断なく維持
- セキュリティチームはSCPで組織全体に設定を強制可能

---

## 前提・背景

### 従来の課題

- **組織間のアカウント移動**: アカウントが組織を離れるとリソースアクセスが失われる
- **M&A・組織再編時の混乱**: 共有リソースの再設定に時間がかかる
- **運用コストの増加**: 業務が中断されるため生産性が低下

### 市場の動向

- AWS Lake Formation がクロスアカウント共有を強化
- EC2 Capacity Blocks が複数アカウント間での共有に対応
- リソース共有の自動化とガバナンス強化への需要が高まる

---

## 変更内容・新機能

### 1. RetainSharingOnAccountLeaveOrganization パラメータ

- リソース共有設定に新しいパラメータを追加
- アカウント移動時にも共有を維持するよう明示的に設定可能

### 2. ram:RetainSharingOnAccountLeaveOrganization 条件キー

- Service Control Policies (SCPs) で使用可能な条件キー
- セキュリティ管理者が組織全体でポリシーを強制できる

### 3. 動作メカニズム

- 有効化時は移行元 Organization のアカウントを外部アカウントとして扱う
- 明示的な招待受け入れが必要
- アカウント移行中もリソースアクセスが保持される

---

## 対応リソース

### 共有可能なAWSリソース

<div class="columns">
<div>

#### ネットワーク関連
- Route53 Resolver Rules
- Transit Gateways
- IPAM プール

</div>
<div>

#### その他リソース
- VPC 関連リソース
- Memory DB クラスター
- その他共有可能リソース

</div>
</div>

---

## 効果・メリット

### ビジネス効果

- **ビジネス継続性**: M&A・組織再編時も業務中断なし
- **運用効率化**: 共有リソースの再設定作業が不要
- **セキュリティの一貫性**: SCPで組織全体にポリシーを統一

### 技術メリット

- **自動化**: 手動による共有設定変更が削減
- **コスト削減**: 運用作業時間の短縮
- **スケーラビリティ**: 複雑な組織構造にも対応

---

## ユースケース

### M&A シナリオ

1. 子会社が買収される
2. 買収企業の Organization に統合
3. **従来**: Route53 Resolver Rules へのアクセスが失われる
4. **新機能**: RetainSharing有効なら自動で招待が送信され、明示受け入れでアクセス継続

### 組織再編シナリオ

- 大規模企業が部門間で Organization を再編成
- Transit Gateways を複数 Organization で共有
- RetainSharing で移行中も通信が中断されない

---

## 利用可能性と料金

### リージョン

- **対応範囲**: すべてのAWSコマーシャルリージョン

### 料金

- **追加コスト**: なし（無料機能）
- 既存のAWS RAMの利用で追加料金は発生しない

---

## まとめ

### このアップデートが解決すること

- アカウント移動時のリソース共有の継続性を保証
- M&Aや組織再編の運用負荷を大幅削減
- セキュリティポリシーの組織全体への統一適用

### 次のステップ

1. 自社の Organization 構造とリソース共有モデルを確認
2. 今後の M&A や組織再編計画を検討
3. 該当するリソース共有に RetainSharing を有効化

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/02/aws-resource-access-manager/
- **AWS RAM ドキュメント**: https://docs.aws.amazon.com/ram/latest/userguide/working-with-sharing-create.html
- **AWS RAM 製品ページ**: https://aws.amazon.com/ram/
- **Lake Formation クロスアカウント共有**: https://aws.amazon.com/about-aws/whats-new/2026/02/aws-lake-formation-cross-account-sharing/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
