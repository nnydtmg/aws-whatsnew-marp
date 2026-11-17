# Amazon VPC で Networking Flexible Cost Allocation が利用可能に

AWS announces Networking Flexible Cost Allocation for Amazon VPC

**カテゴリ:** What's New
**公開日:** 2026-11-16T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/networking-flexible-cost-allocation/)

このページでは、AWS What's Newで発表された「AWS announces Networking Flexible Cost Allocation for Amazon VPC」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon VPCにNetworking Flexible Cost Allocation（FCA）が追加され、共有ネットワーキングコストを実際に発生させたリソース単位で分割表示できるようになりました。複数チームでNATゲートウェイなどのリソースを共有するお客様の正確なコスト把握に役立ちます。CURでは1行で表示されていたネットワーキング使用量をリソースごとに分割し、カスタムスクリプトや固定割合按分が不要になります。請求額自体は変更せず、レポート上の表示のみが変わります。

## このアップデートで何が変わったか

【重要な特徴】
- FCAはレポート上の表示方法のみを変更し、請求額と総費用は変わらない
- 追加料金なし
- トラフィックのルーティングや計量に影響なし
- 逆効力の適用はない
- 関連付けの有効化は作成後60分を起こし次の正時以降

【提供リージョン】
- 追加料金なしで利用可能
- Middle East (Bahrain)、Middle East (UAE)を除くすべてのAWS商用リージョン
- 中国リージョンでも利用可能
- AWS GovCloud (US) リージョンでは未提供

## 対象ユーザー

【対応リソース】
- NATゲートウェイ: データ処理及びデータ転送（インターネット向けトラフィックを含む）
- Amazon EC2 インスタンス: 同一VPC内で直接接続されたピアとのデータ転送
- VPCピアリング接続: 同一リージョン内のVPCピアリングデータ転送

## 詳細

Amazon Virtual Private Cloud (VPC) が Networking Flexible Cost Allocation (FCA) をサポートしました。共有ネットワーキングコストを、実際に使用量を発生させたリソースごとに分割して表示できます。

【対応リソース】
- NATゲートウェイ: データ処理及びデータ転送（インターネット向けトラフィックを含む）
- Amazon EC2 インスタンス: 同一VPC内で直接接続されたピアとのデータ転送
- VPCピアリング接続: 同一リージョン内のVPCピアリングデータ転送

【使い始め方】
1. NATゲートウェイ、VPCピアリング接続、またはAmazon EC2インスタンスにコスト配賦ポリシーをアタッチ
2. AWS Billing and Cost Management コンソールの分割コスト配賦データで「Networking flexible cost allocation」を選択
3. 24時間以内にCURに分割済みの明細行が表示

【重要な特徴】
- FCAはレポート上の表示方法のみを変更し、請求額と総費用は変わらない
- 追加料金なし
- トラフィックのルーティングや計量に影響なし
- 逆効力の適用はない
- 関連付けの有効化は作成後60分を起こし次の正時以降

【対象カスタマー】
- 複数チームでNATゲートウェイ等を共有しているお客様
- VPCフローログ分析のカスタムスクリプトを運用しているお客様
- 固定割合で按分しているお客様

【提供リージョン】
- 追加料金なしで利用可能
- Middle East (Bahrain)、Middle East (UAE)を除くすべてのAWS商用リージョン
- 中国リージョンでも利用可能
- AWS GovCloud (US) リージョンでは未提供

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/networking-flexible-cost-allocation/)