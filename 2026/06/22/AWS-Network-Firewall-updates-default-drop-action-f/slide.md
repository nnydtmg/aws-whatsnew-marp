---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Network Firewall のデフォルト設定が改善 - 接続信頼性向上

AWS Network Firewall updates default drop action for improved connection reliability

**What's New** | 2026-06-22T17:00:00

---

## 概要

- AWS Network Firewallのデフォルトステートフルアクションが変更され、接続信頼性が向上しました
- 新規ポリシー作成時に自動的に適用されるため、ユーザーは追加の対応なし

---

## 前提・背景

### これまでの課題

- 従来のデフォルト設定では、正当なサーバーからクライアントへのTCPパケットが誤ってドロップ
- ウィンドウ更新、キープアライブ、リセットなどが影響
- 診断が困難な断続的な接続障害が発生

---

### 関連する最近の動向

- AWS Network Firewall ドキュメント更新
- ルールアクションの定義と最適化
- ファイアウォール設定のベストプラクティス

---

## 変更内容・新機能

### デフォルト設定の変更

- 新設定: Application drop established (server-directed only)
- 旧設定: Application drop established (bidirectional)
- サーバーからクライアントへのパケット誤ったドロップを防止

### 適用範囲

- 新しいファイアウォールポリシー作成時に自動適用
- すべてのAWSリージョンで利用可能
- ポスト量子暗号(PQC)対応環境もサポート

---

## 効果・メリット

- 接続信頼性の向上で断続的な接続障害が解決
- 新規ポリシー作成時に自動適用で追加対応不要
- セキュリティをより強化できる安全性の高い設定
- トラブルシューティング時間の削減

---

## 利用開始方法

### 新規ポリシー作成時

- 新しいファイアウォールポリシー作成で自動適用
- 特別な設定変更は不要

### 既存環境での対応

- 既存ポリシーは手動で設定変更可能
- 必要に応じてドキュメンテーション参照

---

## まとめ

- AWS Network Firewallのデフォルト設定が改善
- 接続信頼性が向上し、断続的な接続障害が解決
- 新規ポリシー作成時に自動適用でユーザー対応不要
- すべてのAWSリージョンで利用可能

---

## 参考URL

- AWS What's New: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-network-firewall-updates-default-drop-action
- AWS Network Firewall Documentation: https://docs.aws.amazon.com/network-firewall/
