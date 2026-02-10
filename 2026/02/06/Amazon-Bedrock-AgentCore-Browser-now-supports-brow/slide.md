---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Bedrock AgentCore Browser now supports browser profiles

**発表日: 2026年2月6日**

---

# 概要

- Amazon Bedrock AgentCore Browserのブラウザプロファイル機能により、複数のセッション間で認証状態を再利用でき、セットアップ時間を大幅に短縮することが可能になりました。
- この機能は、大規模な自動ブラウザセッション処理を行うエンタープライズ顧客に特に有益です。

---

# 前提・背景

### 課題

従来のブラウザセッションでは、セッション毎にログイン処理を繰り返す必要があり、複数のブラウザセッションを使用する場合、セットアップ時間が大幅にかかっていました。

### 関連する最近の動向

- **Amazon Bedrock AgentCore Browser now supports custom Chrome browser extensions** (2026-01)
  - 複雑なワークフロー自動化をサポート
  - 標準的なブラウザオートメーションを超える機能

---

# 変更内容・新機能

<div class="columns">
<div>

### ブラウザプロファイル機能

- ブラウザプロファイルにより、複数のブラウザセッション間で認証状態を再利用可能
- クッキーとローカルストレージを含むブラウザデータを永続化

### セッションモード

- 読み取り専用と永続的な操作の両方に対応した柔軟なセッションモード
- 複数セッションが同じプロファイルを同時に使用する並列処理が可能

</div>
<div>

### セッション運用

- ログイン流程の繰り返しが不要
- セッションセットアップ時間が**数分から数十秒**に短縮
- 一度Webサイトに認証してプロファイルに保存すれば、次のセッションでも認証状態が保持される

### リージョン対応

- Amazon Bedrock AgentCore Browserが利用可能な**14のAWSリージョン**全てで提供

</div>
</div>

---

# 効果・メリット

- **セットアップ時間の大幅短縮**: 数分から数十秒に削減
- **運用効率の向上**: ログイン流程の繰り返しが不要
- **自動化の簡素化**: 手動ログイン介入なしで認証が必要なサイトでのタスク実行
- **スケーラビリティ**: 複数セッションの並列処理が可能
- **柔軟なセッション管理**: 読み取り専用と永続的な操作の両方に対応
- **エンタープライズ対応**: 1日に数百から数千の自動ブラウザセッション処理に対応

---

# ユースケース

### 大規模自動ブラウザセッション処理

- エンタープライズ顧客が1日に数百から数千の自動ブラウザセッションを処理
- ブラウザプロファイルによる認証状態の再利用で、セットアップ時間を大幅削減

### 認証が必要なWebサイトの自動化

- 複数のサイトへの自動アクセスと情報収集
- ログイン状態の保持により、スムーズな自動実行

### 複数セッションの並列処理

- 複数セッションが同じプロファイルを同時に使用
- パフォーマンスの向上と運用効率の改善

---

# まとめ

- Amazon Bedrock AgentCore Browserがブラウザプロファイル機能をサポート
- 複数セッション間での認証状態の再利用が可能に
- セットアップ時間が大幅に短縮
- エンタープライズ顧客の大規模自動化処理に対応
- 14のAWSリージョンで利用可能

---

# 参考URL

- [元記事: Amazon Bedrock AgentCore Browser now supports browser profiles](https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-bedrock-agentcore-browser-profiles)

### 関連情報

- [Amazon Bedrock AgentCore Browser now supports custom Chrome browser extensions](https://aws.amazon.com/about-aws/whats-new/2026/01/amazon-bedrock-agentcore-browser-custom-extensions/)
- [AWS AI Announcements 2026: Nova 2, Frontier Agents](https://www.youtube.com/watch?v=JvCVbTwy7bk)
