# AWS End User Messaging now supports RCS for Business

**カテゴリ:** What's New
**公開日:** 2026-03-31T15:57:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/rcs-business-messaging/](https://aws.amazon.com/about-aws/whats-new/2026/03/rcs-business-messaging/)

---

## 要約

AWS End User MessagingがRCS for Businessのサポートを開始し、認証済みのビジネスアイデンティティを表示してメッセージを配信できるようになりました。これにより、企業はテキストメッセージングを単なる通知チャネルからAI駆動型の双方向会話体験へと変革することが可能になります。

## 詳細

### 主な特徴

- AWS End User Messagingがリッチコミュニケーションサービス（RCS）for Businessのサポートを開始しました。
- 従来のSMSと異なり、RCSは顧客が既に使用しているメッセージングアプリを通じてメッセージを配信し、認証済みのビジネスアイデンティティ（企業名とロゴ）を表示します。
- ワンタイムパスコード、予約リマインダー、配送通知などの一般的なユースケースに加えて、リッチな会話体験を実現できます。

### 管理と統合

- AWS End User MessagingコンソールまたはAPIを通じてRCSエージェント（RCSメッセージング用リソース）を直接作成・管理できます。
- RCSは自動的なSMSフォールバック機能を備えており、受信者のデバイスがRCSに対応していない場合、アプリケーションに追加ロジックを実装することなくSMSとして配信されます。

### AWS サービス連携

- RCSはAmazon EventBridge、Amazon CloudWatch、Amazon Data Firehoseにイベントをルーティングし、インバウンドメッセージはAmazon SNS経由でAWS LambdaやAmazon Bedrockを活用したAIエージェントに配信されます。
- これにより、双方向のAI駆動型会話体験をアプリケーション内に直接構築でき、テキストメッセージングを通知チャネルからインタラクティブな体験へと変革できます。

### 利用可能範囲

- RCS for Businessは、AWS End User Messagingが利用可能なすべてのAWSリージョンで提供されます。

## ビジネスインパクト

### 顧客体験の向上

- リッチなメッセージングコンテンツにより、視覚的で魅力的なコミュニケーションが実現
- 認証ビジネスアイデンティティにより、顧客の信頼度が向上

### 新しい活用シーン

- AI/LLMとの統合により、自動応答や会話型サポートが可能
- ワンタイムパスコード、予約リマインダー、配送通知など、様々なユースケースに対応

### 開発の効率化

- SMSフォールバック機能により、追加ロジックなしで互換性を確保
- AWS統合により、複雑なインフラ管理の手間を削減
