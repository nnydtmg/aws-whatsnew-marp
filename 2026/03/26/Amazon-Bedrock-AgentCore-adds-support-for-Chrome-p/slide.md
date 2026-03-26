---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Bedrock AgentCore
Chrome ポリシーとカスタムルート CA のサポート

**発表日: 2026年3月19日**

---

## 概要

### Amazon Bedrock AgentCore の2つの主要な強化

- **Chrome Enterprise ポリシー対応**: 100以上の設定可能なポリシーでブラウザ動作を管理
- **カスタムルート CA 証明書**: 組織内部の認証局に対応し、内部サービスへのシームレスな接続実現

### 企業セキュリティ要件への対応

- 厳格なセキュリティポリシーを持つ組織内での安全な運用を実現
- 内部インフラストラクチャとの統合を強化
- AI エージェントの信頼性と管理性を向上

---

## 前提・背景

### エンタープライズ環境の課題

- **セキュリティポリシーの複雑性**: 組織固有のセキュリティ要件への対応が必要
- **内部サービスへのアクセス**: 企業内部で署名された証明書を使用するサービスが存在
- **コンプライアンス要件**: 規制要件に基づくアクセス制御と監査の必要性

### 関連する市場動向

- AI エージェント導入の加速に伴い、セキュリティ管理の重要性が増加
- **AgentCore Policy**: 権限制御によるガバナンス機能が一般提供開始
- エンタープライズワークフローの自動化ニーズの拡大

---

## 主な機能

### 1. Chrome Enterprise ポリシー設定

- **100以上の設定可能なポリシー**: セキュリティ、URL フィルタリング、コンテンツ設定などを管理
- **細粒度の制御**: 特定 URL への制限、キオスクモード運用
- **コンプライアンス実装例**:
  - パスワードマネージャーとダウンロードの無効化
  - URL ブロックリストの実装
  - データ入力タスク向けのセキュア環境構築

### 2. カスタムルート CA 証明書対応

- **内部認証局の証明書**: 組織内部で署名された SSL 証明書に対応
- **内部サービスの接続**: Artifactory、Jira、財務ポータルなどに安全にアクセス
- **企業プロキシ対応**: TLS インターセプションを実行する企業プロキシと連携

---

## 適用対象と利用可能性

### 対応コンポーネント

- **AgentCore Browser**: 全機能対応
- **Code Interpreter**: 全機能対応

### 利用可能なリージョン（全14リージョン）

<div class="columns">
<div>

### 北米・南米
- US East (N. Virginia)
- US East (Ohio)
- US West (Oregon)
- Canada (Central)

</div>
<div>

### ヨーロッパ
- Europe (Frankfurt)
- Europe (Ireland)
- Europe (London)
- Europe (Paris)
- Europe (Stockholm)

</div>
<div>

### アジア太平洋
- Asia Pacific (Mumbai)
- Asia Pacific (Singapore)
- Asia Pacific (Sydney)
- Asia Pacific (Tokyo)
- Asia Pacific (Seoul)

</div>
</div>

---

## 効果・メリット

### セキュリティ面での向上

- **厳格なアクセス制御**: ポリシーベースのブラウザ制御により、不正アクセスを防止
- **コンプライアンス対応**: 組織のセキュリティ要件を自動的に強制
- **内部サービスの保護**: CA 証明書による認証により、安全な内部アクセスを実現

### 運用効率の改善

- **管理の統一**: Chrome ポリシーで組織全体のセキュリティ設定を一元管理
- **統合の簡素化**: カスタム CA により、複雑な認証設定を標準化
- **スケーラビリティ**: 複数の組織要件を効率的に満たしながら AI エージェントを展開

### ビジネスインパクト

- **エンタープライズ導入の加速**: セキュリティ要件をクリアし、本番導入が促進
- **リスク低減**: 厳格な制御により、AI エージェントの予測不可能な動作を防止
- **信頼性向上**: セキュリティ対応を強化し、組織の信頼性を確保

---

## ユースケース

### 1. 金融機関での運用

- 厳格なセキュリティポリシーを持つ金融システムへのアクセス
- 内部の財務ポータルへの安全な接続
- コンプライアンス要件を満たすアクセス制御

### 2. 大規模エンタープライズの開発効率化

- 内部 Artifactory からのライブラリ取得を AI エージェントで自動化
- Jira との連携による開発タスク管理の自動化
- 企業プロキシ環境での安定した運用

### 3. 規制業界での安全な AI 導入

- 医療、通信、エネルギー業界での厳格なセキュリティ要件対応
- URL フィルタリングによる不正アクセスの防止
- 監査ログの自動記録によるコンプライアンス証明

---

## まとめ

### Amazon Bedrock AgentCore の強化ポイント

- **Chrome Enterprise ポリシー**: 100以上のポリシーでブラウザ制御を実現
- **カスタムルート CA**: 内部認証局対応で内部サービスへの安全なアクセスを実現
- **エンタープライズ対応**: 厳格なセキュリティ要件を持つ組織での安全な AI エージェント運用

### 次のステップ

1. 自社のセキュリティポリシーを整理し、必要な Chrome ポリシーを特定
2. 内部認証局の CA 証明書を準備
3. AgentCore Browser/Code Interpreter でのパイロットテストを実施
4. 本番環境への段階的展開を計画

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-bedrock-agentcore-browser-policies-root-ca/
- **AgentCore Browser ドキュメント**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/browser-tool.html
- **Browser Enterprise Policies**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/browser-enterprise-policies.html
- **AgentCore リージョン**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/agentcore-regions.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
