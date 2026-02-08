# Amazon ECS adds Network Load Balancer support for Linear and Canary deployments

**カテゴリ:** What's New
**公開日:** 2026-02-04T18:00:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-ecs-nlb-linear-canary-deployments](https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-ecs-nlb-linear-canary-deployments)

---

## 要約

Amazon ECS が Network Load Balancer に対応した Linear および Canary デプロイメント戦略のネイティブサポートを追加いたしました。これにより、TCP/UDP ベースの接続や低レイテンシーを必要とするアプリケーションが、段階的なトラフィックシフトと CloudWatch アラーム統合によるリスク軽減されたデプロイメントを実現できるようになります。

## 詳細

- Amazon ECS が Network Load Balancer (NLB) に対応した Linear および Canary デプロイメント戦略のネイティブサポートを追加いたしました。

- TCP/UDP ベースの接続、低レイテンシー、長時間接続、または静的 IP アドレスを必要とするアプリケーションが、ECS からのマネージド段階的トラフィックシフトを活用できるようになりました。

- デプロイメント中にトラフィックを段階的に移行したり、小さなパーセンテージから開始して変更を検証してからロールアウトを完了したりできます。

- Amazon CloudWatch アラームと統合され、問題が検出された場合に自動的にデプロイメントを停止またはロールバックできます。

- オンラインゲームバックエンド、金融取引システム、リアルタイムメッセージングサービスなどの NLB の背後で実行されるワークロードに特に有用です。

- AWS Management Console、AWS CLI、またはインフラストラクチャアズコードツールを使用して設定でき、すべての AWS 商用およびAWS GovCloud (US) リージョンで新規および既存の ECS サービスに対して有効にできます。