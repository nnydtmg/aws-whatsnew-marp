# Amazon Cognito がマルチリージョンレプリケーションに対応

Amazon Cognito now supports multi-Region replication

**カテゴリ:** What's New
**公開日:** 2026-06-04T17:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cognito-multi-region/)

このページでは、AWS What's Newで発表された「Amazon Cognito now supports multi-Region replication」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Cognitoのマルチリージョンレプリケーション機能により、ユーザーおよびマシンアイデンティティデータをセカンダリリージョンに同期し、地域障害時の認証システムの耐障害性を大幅に向上させることができます。この機能はEssentialsまたはPlus機能層のユーザープールで利用可能であり、複数のAWSリージョンでサポートされています。

## このアップデートで何が変わったか

- Amazon Cognitoがマルチリージョンレプリケーション機能をサポートするようになりました。
- ユーザーおよびマシンアイデンティティデータ（認証情報、ユーザープール設定、フェデレーション設定など）をスタンバイリージョンのセカンダリユーザープールにほぼリアルタイムで同期できます。
- プライマリリージョンで障害が発生した場合、セカンダリユーザープールにトラフィックをリダイレクトできます。
- サインイン済みユーザーは再認証なしでアプリケーションにアクセスでき、登録済みユーザーは既存の認証情報でサインインできます。
- ユーザー名/パスワード、ソーシャルアイデンティティプロバイダー、SAML/OIDCプロバイダーとのフェデレーション、マシン間認可フローなど、すべての認証方法がセカンダリリージョンで機能します。
- この機能はEssentialsまたはPlus機能層のユーザープールのアドオンとして利用可能です。
- 複数のAWSリージョンで利用可能です（米国東部、米国西部、アジア太平洋、カナダ、ヨーロッパ、南米）。
- AWS Management Console、AWS CLI、またはAWS SDKを使用して設定できます。

## 対象ユーザー

### グローバル企業
- 複数リージョンでのアイデンティティ管理が必要な組織
- ビジネス継続性を重視する組織

### SaaS プロバイダー
- マルチテナント環境での信頼性向上が必要な企業
- 地域障害対応が要件の企業

### 金融機関
- 規制要件への対応が必要な組織
- 高可用性が必須の業界

## 詳細

### コア機能

1. **リアルタイムデータ同期**
   - ユーザープール設定がセカンダリリージョンと常に同期
   - 認証情報の同期
   - フェデレーション設定の同期

2. **自動フェイルオーバー**
   - プライマリリージョン障害時に自動切り替え
   - ダウンタイムなし
   - ユーザー再認証なし

3. **包括的な認証方式対応**
   - ユーザー名/パスワード
   - ソーシャルアイデンティティプロバイダー
   - SAML/OIDCフェデレーション
   - マシン間認可フロー

### 利用可能な機能層

- **Essentials** 機能層
- **Plus** 機能層
- アドオンとして追加料金で提供

### 対応リージョン

- 米国東部（N. Virginia）
- 米国西部（Oregon）
- アジア太平洋各リージョン
- カナダ（中部）
- ヨーロッパ各リージョン
- 南米（São Paulo）

## 効果・メリット

### ビジネスメリット

- **サービス継続性**: 地域障害時のサービス中断を回避
- **ユーザー信頼**: ダウンタイムなし、再認証不要
- **規制対応**: データレジデンシ、業界規制への準拠

### 技術メリット

- **自動管理**: AWS がレプリケーション管理を担当
- **運用効率**: 複雑なロジック実装が不要
- **スケーラビリティ**: グローバル展開の容易化

### 開発・運用メリット

- **実装の簡素化**: AWS Console, CLI, SDKで設定
- **リソース削減**: 自前実装コスト削減
- **時間短縮**: 開発期間の短縮

## ユースケース

### 例1: グローバルな金融アプリケーション

- ユーザーが複数の国でアクセス
- 規制要件で99.99%の可用性が必須
- 地域障害時も自動でセカンダリリージョンに切り替え

### 例2: SaaS プラットフォーム

- 複数国の顧客をサポート
- マルチテナント環境での信頼性向上
- 災害復旧計画の実装

### 例3: グローバル企業の従業員認証

- 複数国の拠点での従業員ログイン
- VPN/リモートアクセスの認証
- 地域障害時のビジネス継続性確保

## 参考リンク

- [元記事 - AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cognito-multi-region/)
- [Multi-Region replication for user pools - ドキュメント](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-multi-region.html)
- [Amazon Cognito マルチリージョンレプリケーション - AWSブログ](https://aws.amazon.com/blogs/aws/improve-your-application-resilience-with-amazon-cognito-multi-region-replication)
- [ディザスタリカバリ事例 - AWSブログ](https://aws.amazon.com/blogs/architecture/how-unitedhealth-group-improved-disaster-recovery-for-machine-to-machine-authentication)