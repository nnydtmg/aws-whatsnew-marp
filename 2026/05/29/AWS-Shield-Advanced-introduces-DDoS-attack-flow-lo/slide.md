---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Shield Advanced が DDoS 攻撃フロー ログをサポート

AWS Shield Advanced introduces DDoS attack flow logs

**発表日: 2026年5月29日**

---

## 概要

### DDoS 攻撃フロー ログの導入

- AWS Shield Advancedが、DDoS攻撃時のパケットレベルの詳細なトラフィック情報を取得できるDDoS攻撃フロー ログ機能を新たに導入
- セキュリティ運用チーム、コンプライアンス担当者、インシデント対応チームが利用可能
- フォレンジック分析、脅威インテリジェンス収集、コンプライアンス報告の効率化を実現

---

## 前提・背景

### 従来の課題

- DDoS攻撃発生時、詳細なパケットレベルの可視性が限定的
- インシデント後の調査に必要なデータが不足
- コンプライアンス要件への対応が困難

### 市場の動向

- DDoS攻撃の高度化・複雑化に伴うセキュリティ強化の需要
- 規制要件の強化によるコンプライアンス対応の重要性
- インシデント対応の効率化ニーズ

---

## 主な機能

### DDoS 攻撃フロー ログの詳細情報

- **キャプチャデータ**: ソース/宛先IPアドレス、ポート、プロトコル
- **トラフィック統計**: パケット数、バイト数
- **地理情報**: 送信元国情報
- **発行頻度**: アクティブな攻撃中に5分間隔で自動発行

### 出力先オプション

- **Amazon S3**: 長期保存・分析用
- **Amazon CloudWatch Logs**: リアルタイム監視
- **Amazon Data Firehose**: ストリーミング処理

---

## 利用方法

### 有効化の手順

1. AWS Shield Advancedでリソースを保護
2. ログ配信先を選択（S3、CloudWatch Logs、Firehose）
3. ログ配信設定を構成
4. 任意の分析ツールでデータを取得・分析

### 対応リージョン

- AWS Shield Advancedが利用可能なすべてのリージョンで利用可能

---

## 活用シーン

### セキュリティ運用

- **フォレンジック分析**: 攻撃パターンの詳細調査
- **脅威インテリジェンス**: 攻撃元の特定と傾向分析
- **コンプライアンス報告**: 監査ログの自動生成

### インシデント対応

- インシデント後の詳細な調査
- 攻撃ベクトルの文書化
- 改善措置の優先順位付け

---

## 期待される効果

### セキュリティの強化

- パケットレベルの可視性により、攻撃の詳細把握が可能
- 迅速な脅威分析と対応
- 攻撃パターンの蓄積と予防

### 運用効率の向上

- 自動ログ発行による手動作業の削減
- 複数の分析ツールへの対応
- 長期保存と履歴分析が容易に

### コンプライアンス対応

- 監査ログの自動生成
- 規制要件への充実した対応
- 透明性の向上

---

## まとめ

### AWS Shield Advanced の進化

- DDoS攻撃フロー ログにより、セキュリティ運用の質が大幅向上
- パケットレベルの詳細可視化で、より効果的なインシデント対応が実現
- 複数の出力先オプションで、既存システムとの統合が容易

### 次のステップ

1. 自社の DDoS 対策ニーズを評価
2. AWS Shield Advanced の導入検討
3. DDoS 攻撃フロー ログの有効化
4. 分析ツール の統合構築

---

## 参考リソース

- [AWS Shield Advanced introduces DDoS attack flow logs](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-shield-ddos/)
- [Shield Advanced attack flow logs - AWS Documentation](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-flow-logs.html)
- [AWS Shield Advanced metrics](https://docs.aws.amazon.com/waf/latest/developerguide/shield-metrics.html)
- [Visibility into DDoS events with Shield Advanced](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-viewing-events.html)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**