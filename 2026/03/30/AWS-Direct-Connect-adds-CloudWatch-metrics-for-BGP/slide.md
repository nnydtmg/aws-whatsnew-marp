---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Direct Connect CloudWatch メトリクス BGP 監視
ハイブリッドクラウド接続の可視性向上

**発表日: 2026年3月30日**

---

## 概要

### AWS Direct Connect の新機能

- **3つの新しい CloudWatch メトリクス** がBGP セッション監視に対応
- **ハイブリッドクラウド接続の可視性** が大幅に向上
- **ネットワーク問題の検出時間** を短縮
- ネットワークエンジニアと運用チームの **監視効率を大幅改善**

---

## 前提・背景

### 従来の課題

- BGP セッションの健全性を監視するためのカスタムツール構築が必要
- カスタム Lambda 関数やオンプレミスネットワーク管理ツールの開発が必須
- ネットワーク問題の検出から対応までに時間がかかる
- マルチリージョンやディザスタリカバリ環境での監視の複雑化

### 市場動向

- ハイブリッドクラウド環境の採用拡大
- ネットワーク運用の自動化・可視化のニーズ増加
- CloudWatch による統合監視へのシフト
- リアルタイムなアラート機構の重要性向上

---

## 主な機能

### 1. VirtualInterfaceBgpStatus

- **BGP セッションの状態** をリアルタイム報告
- **Up / Down** の状態を自動検出
- セッション障害を即座に把握可能
- ダウンタイム最小化

### 2. VirtualInterfaceBgpPrefixesAccepted

- オンプレミスネットワークから **受け取るプレフィックス数** を追跡
- プレフィックス制限に達する前に **プロアクティブなアラーム** を設定
- ネットワーク設定エラーの早期発見
- ルート失敗のリスク軽減

### 3. VirtualInterfaceBgpPrefixesAdvertised

- AWS がネットワークに **アドバタイズするルート数** を監視
- 設定変更の **検証と確認** が可能
- BGP セッション稼働中の **無音ルート撤回** を検出
- トラフィック障害を事前に把握

---

## 対応範囲と統合

### サポート範囲

<div class="columns">
<div>

**対応仮想インターフェース**
- プライベート VIF
- パブリック VIF
- トランジット VIF

</div>
<div>

**対応リージョン**
- すべてのコマーシャル AWS リージョン
- プレビューから一般提供へ移行
- グローバル対応

</div>
</div>

### CloudWatch との統合

- **CloudWatch ダッシュボード** による可視化
- **CloudWatch アラーム** による自動通知
- **Amazon SNS** による多様な通知方法
- カスタムメトリクス計算で高度な監視も可能

---

## 利用シーン・ユースケース

### ネットワークエンジニア向け

- BGP セッションの **常時監視**
- ルート数の **トレンド分析**
- ネットワーク設定変更時の **影響度判定**

### 運用チーム向け

- **24/7 の自動監視** によるトラブルシューティング高速化
- インシデント検出から対応までの **時間短縮**
- ダッシュボードによる **一元管理**

### エンタープライズ環境

- **マルチリージョン構成** の統一管理
- **ディザスタリカバリ** 環境での健全性確認
- コンプライアンス要件に基づくログ保存

---

## メリット・効果

### 運用効率化

- ✅ カスタム Lambda 関数の **不要化**
- ✅ オンプレミスネットワーク管理ツール構築の **省略**
- ✅ 開発・保守コストの **大幅削減**

### 可視性向上

- ✅ BGP セッション状態の **リアルタイム把握**
- ✅ ネットワーク問題の **早期発見**
- ✅ ルート変更の **即座な確認**

### ビジネス価値

- ✅ ネットワーク問題の **検出時間を短縮**
- ✅ ダウンタイムの **最小化**
- ✅ ハイブリッドクラウド環境の **安定運用**

---

## 実装方法

### CloudWatch メトリクス確認方法

```
1. CloudWatch コンソール を開く
2. 「メトリクス」→「すべてのメトリクス」を選択
3. 「DirectConnect」 を検索
4. 新規メトリクスを確認可能
```

### アラーム設定例

- **VirtualInterfaceBgpStatus = 0** (Down) でアラート
- **VirtualInterfaceBgpPrefixesAccepted > 閾値** でアラート
- **VirtualInterfaceBgpPrefixesAdvertised < 最小値** でアラート

### SNS 統合

- Email / SMS / Slack / Lambda へ通知
- 自動フェイルオーバーの組み込み可能

---

## まとめ

### AWS Direct Connect BGP 監視の進化

- **新たな 3つのメトリクス** により、ハイブリッドクラウド接続の可視性が大幅向上
- **CloudWatch ネイティブ** なため、追加ツール不要
- **運用効率化** と **コスト削減** を同時実現
- **リアルタイム監視** でネットワーク問題に素早く対応

### 推奨される次のステップ

1. **既存環境で新メトリクス** を確認
2. **CloudWatch ダッシュボード** を構築
3. **アラームルール** を定義・設定
4. **SNS 統合** による通知体制を整備
5. **本番環境** への段階的導入

---

## 参考リソース

- **[AWS Direct Connect - CloudWatch メトリクス新機能](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-direct-connect-cloudwatch-bgp-monitoring/)**
- **[Monitor with Amazon CloudWatch - AWS Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/monitoring-cloudwatch.html)**
- **[View Direct Connect CloudWatch metrics](https://docs.aws.amazon.com/directconnect/latest/UserGuide/viewing-metrics.html)**
- **[Monitor connectivity and status in Direct Connect](https://repost.aws/knowledge-center/direct-connect-monitor-connectivity)**

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**