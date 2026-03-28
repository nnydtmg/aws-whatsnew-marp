---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Management Console がサービスとリージョンの表示設定に対応

アカウント管理者向けコンソールカスタマイズ機能

**発表日: 2026年3月27日**

---

## 概要

AWS Management Consoleで、サービスとリージョンの表示設定をカスタマイズできる機能が一般提供されました。

### 主な特徴

- **アカウント管理者向け**: 認可されたユーザーのみが利用可能なサービスとリージョンを制御
- **複数の管理方法**: コンソール、CLI、SDK、CDK、CloudFormationから設定可能
- **追加費用なし**: AWS コマーシャルリージョンで無料提供

---

## 前提・背景

### 従来の課題

- AWS Management Consoleには多数のサービスが表示されるため、ユーザーが必要なサービスを見つけにくい
- 利用予定のないリージョンがすべて表示されるため、ナビゲーションが複雑化
- 不要なサービス・リージョンを非表示にする方法がなかった

### 市場動向

- エンタープライズでのマルチアカウント管理の複雑化に対応
- 組織のベストプラクティスに基づいた統一管理へのニーズ
- User Experience Customization (UXC) サービスが拡張され、より多くのカスタマイズが可能に

---

## 変更内容・新機能

### 1. Visible Services（サービス表示設定）

- **All services** メニューに表示するサービスをカスタマイズ
- 不要なサービスを非表示にしてナビゲーションを簡潔化
- アカウント内のすべての認可ユーザーに統一して適用可能

### 2. Visible Regions（リージョン表示設定）

- リージョンセレクタに表示するリージョンを選択可能
- 利用予定のあるリージョンのみを表示
- 誤ったリージョンの選択を防止

### 3. アカウントカラーカスタマイズ

- アカウント識別用のカラー設定も同時提供
- 複数アカウント管理時の視覚的な区別が容易に

---

## 設定方法

### AWS Management Consoleから設定

1. AWS Management Consoleにサインイン
2. ナビゲーションバーでアカウント名を選択
3. **Account Settings** タブを開く
4. **Unified Settings** セクションで設定
   - Visible Services: 表示するサービスをチェック
   - Visible Regions: 表示するリージョンを選択

### プログラマティック設定

AWS CLI、SDKs、CDK、CloudFormation を使用して自動化可能

---

## メリット・効果

### ユーザー体験の向上

- **ナビゲーション簡素化**: 必要なサービス・リージョンのみ表示
- **エラー防止**: 不要なリージョン選択による間違いを削減
- **検索性向上**: 利用可能なリソースをすぐに把握可能

### 管理効率の向上

- **統一管理**: 組織全体で統一された設定を適用
- **セキュリティ向上**: 不要なサービスを非表示にしてセキュリティ周知を強化
- **オンボーディング支援**: 新入社員に必要なサービス・リージョンのみを提示

---

## メリット・効果（続き）

### コスト・運用最適化

- **コスト削減**: 不要なリソース作成を防止
- **ガバナンス強化**: 組織ポリシーに基づいたアクセス制御
- **複雑性削減**: 大規模組織でのアカウント管理を簡素化

---

## ユースケース

### グローバル企業の地域別運用

特定の地域でのみ運用するチームに対して、その地域のリージョンのみを表示

### SaaS プロバイダー

顧客向けマネージドアカウントに、必要なサービスのみを表示して UX を統一

### スタートアップの段階的展開

初期段階で使用するサービスのみを表示し、段階的に追加する

---

## まとめ

### AWS Management Console の表示設定対応について

- アカウント管理者がサービスとリージョンの表示をカスタマイズ可能に
- ユーザーの利便性とセキュリティを同時に実現
- コンソール、CLI、SDK、CDK、CloudFormation から管理可能
- AWS コマーシャルリージョンで追加費用なく利用可能

### 次のステップ

1. 組織のユースケースに合わせた表示設定の方針を策定
2. パイロットプロジェクトでの検証
3. 本番環境への段階的展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/account-customizations-console/
- **AWS User Experience Customization ドキュメント**: https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/uxc.html
- **AWS User Experience Customization API ガイド**: https://docs.aws.amazon.com/awsconsolehelpdocs/latest/APIReference/Welcome.html
- **関連: AWS API Changes - UXC**: https://awsapichanges.info/archive/service/uxc

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**