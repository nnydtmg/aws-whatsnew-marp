# Amazon CloudWatch agent が journald ログ収集に対応

Amazon CloudWatch agent adds support for journald logs

**カテゴリ:** What's New  
**公開日:** 2026年8月28日  
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-cloudwatch-agent-journald/)

---

## 要約

Amazon CloudWatch agent が systemd journald（ジャーナル）ログの直接収集に対応しました。CloudWatch agent が Linux インスタンス上の systemd journal から直接ログエントリを読み込み、ディスクにファイルを書き込まずに Amazon CloudWatch Logs に送信できるようになります。

このアップデートは、Amazon Linux 2023 を含む最新 Linux ディストリビューションを使用する組織にとって有益です。現代的な Linux ディストリビューションの多くが systemd journal をプライマリロギングシステムとして採用し、従来のテキストログファイルをデフォルトで生成しなくなっているためです。

---

## このアップデートで何が変わったか

### 新しい機能

1. **journald ログのネイティブ対応**
   - CloudWatch agent が systemd journal から直接ログを収集
   - 中間ファイル（一時ログファイル）の作成が不要に

2. **構造化メタデータの保持**
   - systemd ユニット情報
   - ジャーナルの優先度レベル
   - プロセス情報
   - その他のジャーナルフィールド

3. **柔軟なログフィルタリング**
   - systemd ユニット単位での選別
   - 優先度レベル（INFO、WARNING、ERROR など）でのフィルタリング
   - ジャーナルフィールドマッチ
   - CloudWatch Logs 公開前の正規表現フィルタ適用

### メリット

- **ログボリュームとコスト削減**: フィルタリングで不要なログを削減し、CloudWatch Logs の取り込み料金を最小化
- **ノイズ低減**: 重要なログのみを収集・保存
- **ディスク効率化**: 一時ファイルの作成を排除して I/O オーバーヘッド低減
- **管理の簡素化**: CloudWatch agent 単一ツールですべてのログ収集を統一

---

## 対応リージョンと可用性

- **AWS Commercial Regions**: すべてのリージョンで利用可能
- **GovCloud（US）**: 対応済み
- **料金**: 標準的な Amazon CloudWatch Logs の料金が適用（リージョンにより異なる）

---

## 利用開始方法

### 前提条件

- Linux インスタンス（Amazon Linux 2023 など systemd 搭載）
- CloudWatch agent の最新バージョン

### セットアップ手順

1. CloudWatch agent を最新バージョンに更新
2. エージェント設定ファイルに `journald` セクションを追加
3. 以下のような設定例を参考に、フィルタリングルールを設定：

```json
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

4. エージェントを再起動して変更を反映

---

## 料金と最適化

### CloudWatch Logs 料金体系

- **ログ取り込み**: 1 GB あたり $0.50（リージョンにより変動）
- **ストレージ**: 1 GB あたり月額 $0.03（リージョンにより変動）

### コスト最適化のポイント

1. **フィルタリングの活用**: 優先度や特定のユニットでフィルタリングして、取り込み量を削減
2. **保持期間の管理**: CloudWatch Logs の保持期間を適切に設定
3. **ログストリームの分割**: サービスやユースケース別に分けて管理

---

## 背景・市場の動向

### なぜ今、journald 対応が必要か

- **業界トレンド**: Amazon Linux 2023 を含む最新 Linux ディストリビューションが systemd journal をプライマリロギングシステムに統一
- **従来ファイルの廃止**: テキストログファイル（syslog など）の出力が削減される傾向
- **要望の多さ**: GitHub Issue #382 など、ユーザーからの要望が多かった機能

### 以前の解決策

- サードパーティツール（Vector、journald-cloudwatch-logs など）に依存
- ファイルベースのフォールバック（ディスク I/O のオーバーヘッド）
- 複数のツール管理による運用複雑化

---

## 参考資料

### AWS 公式ドキュメント

- [AWS What's New 記事](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-cloudwatch-agent-journald/)
- [CloudWatch Agent インストールガイド](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html)
- [CloudWatch Agent 設定ファイル詳細](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-Configuration-File-Details.html)
- [CloudWatch Logs ユーザーガイド](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/)
- [EC2 インスタンス向けクイックスタート](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/QuickStartEC2Instance.html)

### 関連リンク

- [GitHub: Amazon CloudWatch Agent リポジトリ](https://github.com/aws/amazon-cloudwatch-agent)
- [GitHub Issue #382: journald 対応リクエスト](https://github.com/aws/amazon-cloudwatch-agent/issues/382)
- [AWS re:Post: CloudWatch Agent で systemd ログをキャプチャする方法](https://repost.aws/questions/QUSwDIMEPwRVue_gaSPdAEaA/how-can-you-capture-linux-systemd-logs-using-the-cloudwatch-agent)

---

## まとめ

Amazon CloudWatch agent の journald サポートにより、Linux ロギング戦略が大きく変わります。最新 Linux ディストリビューションのネイティブロギングシステムに直接対応することで、CloudWatch は統一されたログ管理プラットフォームとしての地位をさらに強化します。

**次のアクション**:

1. 使用中の CloudWatch agent バージョンを確認
2. 最新版への更新計画を立てる
3. journald ログ収集の対象サービスを検討
4. フィルタリングルールを設計
5. テスト環境で動作確認
6. 本番環境への段階的展開