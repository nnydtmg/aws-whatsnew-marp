# AWS Shield Advanced が DDoS 攻撃フロー ログをサポート

AWS Shield Advanced introduces DDoS attack flow logs

**カテゴリ:** What's New
**公開日:** 2026-05-29T17:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-shield-ddos/)

このページでは、AWS What's Newで発表された「AWS Shield Advanced introduces DDoS attack flow logs」の内容を日本語で要約しています。

---

## 要約

AWS Shield Advancedが、DDoS攻撃時のパケットレベルの詳細なトラフィック情報を取得できるDDoS攻撃フロー ログ機能を新たに導入しました。この機能は、セキュリティ運用チーム、コンプライアンス担当者、およびインシデント対応チームにとって、フォレンジック分析、脅威インテリジェンス収集、およびコンプライアンス報告を効率的に実施するために有益です。

---

## このアップデートで何が変わったか

### 新機能: DDoS 攻撃フロー ログ

- AWS Shield Advancedで保護されたリソースに到達するトラフィックのパケットレベルの可視性を提供
- ソースおよび宛先IPアドレス、ポート、プロトコル、パケットおよびバイト数、送信元国情報などの詳細情報を取得可能
- アクティブな攻撃中に5分間隔で自動的に発行

### ログ出力先

- **Amazon S3**: 長期保存と分析用
- **Amazon CloudWatch Logs**: 監視・ログ管理用
- **Amazon Data Firehose**: ストリーミング処理・連携用

### 対応地域

- AWS Shield Advancedが利用可能なすべてのリージョン

---

## 活用シーン

### セキュリティ運用

- **フォレンジック分析**: インシデント後の詳細な調査と攻撃パターンの分析
- **脅威インテリジェンス**: 攻撃元の特定、セキュリティ傾向の把握
- **コンプライアンス報告**: 監査ログの自動生成、規制要件への対応

### インシデント対応

- 攻撃ベクトルの詳細な文書化
- セキュリティギャップの特定
- 将来の防御改善に向けた優先順位付け

---

## 期待される効果

### セキュリティの強化

- 攻撃の詳細な可視化により、より効果的な脅威分析が可能
- 迅速なインシデント対応で被害最小化
- 攻撃パターンの蓄積による予防的セキュリティ対策

### 運用効率の向上

- 自動ログ発行による手動作業の削減
- 複数の分析ツール対応で既存システムとの統合が容易
- 長期保存と履歴分析の活用

### コンプライアンス対応

- 自動化された監査ログで規制要件への充実した対応
- 透明性と説明責任の向上

---

## 有効化方法

### 前提条件

- AWS Shield Advanced のサブスクリプション
- 対象リソースの Shield Advanced での保護設定

### 設定手順

1. AWS Shield Advanced コンソールで対象リソースを選択
2. ログ配信先を選択（S3、CloudWatch Logs、Firehose）
3. 配信先の設定を構成
4. ログ配信を有効化

---

## 参考情報

### 公式リソース

- [AWS What's New: AWS Shield Advanced introduces DDoS attack flow logs](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-shield-ddos/)
- [AWS WAF ドキュメント: Shield Advanced attack flow logs](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-flow-logs.html)
- [AWS Shield Advanced メトリクス](https://docs.aws.amazon.com/waf/latest/developerguide/shield-metrics.html)
- [DDoS イベントの可視化](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-viewing-events.html)

### 関連情報

- [AWS Shield Advanced](https://aws.amazon.com/shield/)
- [DDoS 対策のベストプラクティス](https://aws.amazon.com/about-aws/whats-new/2026/01/shielding-your-apps-aws-strategies-for/)

---

## 次のステップ

1. 現在の DDoS 対策状況を評価
2. AWS Shield Advanced 導入の検討
3. DDoS 攻撃フロー ログの有効化
4. 既存の分析・監視ツール との統合
