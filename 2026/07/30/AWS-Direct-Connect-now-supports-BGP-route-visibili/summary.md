# AWS Direct Connect に BGP ルート可視化機能が登場

AWS Direct Connect now supports BGP route visibility on Virtual Interfaces

**カテゴリ:** What's New
**公開日:** 2026-07-30
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-direct-connect-bgp-visibility/)

このページでは、AWS What's Newで発表された「AWS Direct Connect now supports BGP route visibility on Virtual Interfaces」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Direct Connectは、BGPルート可視化機能を新たに提供し、プライベート、トランジット、パブリック仮想インターフェース全体でAWSとオンプレミスルーター間で交換されるルートの詳細情報を確認できるようになりました。この機能により、ネットワーク管理者はルーティングの問題のトラブルシューティング、ルート伝播の検証、複雑なマルチリージョンアーキテクチャの管理が容易になります。

## このアップデートで何が変わったか

### 新機能の概要

- AWS Direct Connectは、プライベート、トランジット、パブリック仮想インターフェース（VIF）全体でAWSとオンプレミスルーター間で交換されるBGPルートの可視化機能を提供するようになりました
- ネットワーク管理者はAWSが受け入れたルートと広告しているルートを確認でき、ASパスとBGPコミュニティ値も表示されます
- ルーティングの問題のトラブルシューティング、ルート伝播の検証、ハイブリッドネットワーク接続の監視が可能になります

### 利用方法

- Direct ConnectコンソールまたはListVirtualInterfaceRoutes APIアクションを使用して、受け入れたルートと広告されたルートを直接確認できます
- 各ルートには、プレフィックス、アドレスファミリ、ASパス、コミュニティ値、インストールタイムスタンプが表示されます
- プレフィックス、ASパス、コミュニティ、またはアドレスファミリでルートをフィルタリングして、特定のルーティング動作を迅速に特定できます

### ユースケース

- 複雑なマルチリージョンアーキテクチャの管理
- BGPポリシー設定の検証
- 予期しないトラフィックパターンの診断に特に有用です

## 対象ユーザー

- AWS Direct Connectを利用するネットワーク管理者
- ハイブリッドネットワーク環境を運用するクラウドアーキテクト
- BGPルーティングの可視性が必要な組織

## 利用可能なリージョン

- すべてのAWSコマーシャルリージョン
- AWSチャイナリージョン（北京および寧夏）

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-direct-connect-bgp-visibility/)
- [AWS Direct Connect ドキュメント](https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html)
- [Direct Connect routing policies and BGP communities](https://docs.aws.amazon.com/directconnect/latest/UserGuide/routing-and-bgp.html)