---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudWatch agent が journald ログ収集に対応

**発表日: 2026年8月28日**

---

## 概要

### 主な改善点

- **systemd journald ログのネイティブ対応**: CloudWatch agent が journald から直接ログを収集
- **ディスク書き込み不要**: 一時ファイルを経由せずにクラウドに送信
- **構造化メタデータ保持**: systemd ユニット、優先度、プロセス情報を保持
- **ログボリュームとコスト削減**: フィルタリングと正規表現マッチでノイズを削減

---

## 前提・背景

### 市場の動向

- Amazon Linux 2023 を含む最新 Linux ディストリビューションが systemd journal をプライマリロギングシステムに移行
- 従来のテキストログファイルの出力が廃止される傾向
- CloudWatch agent でのネイティブ journald 対応が求められていた

### これまでの課題

- systemd journal からログを取得するには、ファイルに書き込む必要があった
- ディスク I/O とストレージのオーバーヘッド
- サードパーティツール（Vector など）への依存

---

## 主な機能と改善

### 1. journald ログの直接収集

- Linux インスタンス上の systemd journal から直接ログエントリを読み込み
- ディスクへのファイル書き込みなしで CloudWatch Logs に送信
- タイムスタンプ精度の向上

### 2. 構造化メタデータの保持

- systemd ユニット情報
- ジャーナルの優先度レベル
- プロセス情報
- カスタムジャーナルフィールド

---

## 変更内容・ログフィルタリング機能

### フィルタリング方法（複数の組み合わせが可能）

- **systemd ユニット単位**: 特定のサービスのログのみ収集
- **優先度レベルマッチ**: INFO、WARNING、ERROR などで絞り込み
- **ジャーナルフィールドマッチ**: カスタムフィールドで詳細フィルタリング
- **正規表現フィルタ**: CloudWatch Logs 公開前のテキスト処理

### 利用可能リージョン

- AWS Commercial Regions（すべてのリージョン）
- GovCloud（US）リージョン

---

## 効果・メリット

<div class="columns-3">
<div>

### ✅ コスト削減

- ディスク I/O 削減
- ログボリューム最適化
- 不要なログを事前フィルタリング

</div>
<div>

### ✅ 運用効率化

- CloudWatch agent の単一統合ツール化
- サードパーティ依存の排除
- 設定ファイルベースで簡単管理

</div>
<div>

### ✅ ログ品質向上

- 構造化メタデータの保持
- 精密なタイムスタンプ
- 柔軟なフィルタリング

</div>
</div>

---

## 利用開始方法

### 準備ステップ

1. **CloudWatch agent の更新**
   - 最新バージョンに更新

2. **エージェント設定ファイルの編集**
   ```
   "logs": {
     "logs_collected": {
       "systemd": {
         "collect_list": [
           {
             "unit": "service-name",
             "priority_filter": "warning"
           }
         ]
       }
     }
   }
   ```

3. **エージェントの再起動**
   - 新しい設定が有効化される

---

## 料金

### CloudWatch Logs 料金

- 取り込まれたログに対して標準的な CloudWatch Logs 料金を適用
- ログ取り込み: 1 GB あたり $0.50（リージョンにより異なる）
- 保存料金: 1 GB あたり月額 $0.03（リージョンにより異なる）

### コスト最適化のポイント

- フィルタリング機能で不要なログを削減
- 保持期間の適切な設定
- ログストリームの適切な分割

---

## まとめ

### このアップデートの意義

- **Linux ロギングの近代化対応**: systemd 中心への業界トレンドに準拠
- **CloudWatch agent の統合強化**: 単一ツールでのログ管理が実現
- **コスト・パフォーマンスの向上**: ディスク I/O と不要なログ削減

### 次のステップ

1. 現在の CloudWatch agent バージョンの確認
2. 最新版への更新計画
3. journald ログ収集の対象サービスの選定
4. フィルタリングルールの検討と実装
5. テスト環境での検証

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-cloudwatch-agent-journald/
- **CloudWatch agent ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html
- **CloudWatch agent 設定**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-Configuration-File-Details.html
- **Amazon CloudWatch ユーザーガイド**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**