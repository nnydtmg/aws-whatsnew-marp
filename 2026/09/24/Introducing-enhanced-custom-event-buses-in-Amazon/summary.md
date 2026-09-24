# Amazon EventBridge の強化カスタムイベントバスが登場 エンタープライズ規模のイベント駆動型アプリに対応

Introducing enhanced custom event buses in Amazon EventBridge for enterprise-scale event-driven applications

**カテゴリ:** AWS Blog
**公開日:** 2026-09-24T20:58:46
**元記事:** [元記事](https://aws.amazon.com/blogs/aws/introducing-enhanced-custom-event-buses-in-amazon-eventbridge-for-enterprise-scale-event-driven-applications/)

このページでは、AWS What's Newで発表された「Introducing enhanced custom event buses in Amazon EventBridge for enterprise-scale event-driven applications」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon EventBridgeの強化されたカスタムイベントバスは、組織全体で共有可能な単一イベントバスにより、エンタープライズ規模のイベント駆動型アプリケーションの運用を簡素化します。組織全体で共有できる単一の中央イベントバス、イベントの順序保証、簡素化されたSubscriberリソース、および新しい料金モデルが提供されます。

## このアップデートで何が変わったか

【主な新機能】
1. 組織全体での共有: AWS RAM を使用し、単一の中央イベントバスを組織内の全AWSアカウントで共有できます。クロスアカウント権限やバス間ルーティングの設定が不要です。共有対象は組織、OU、AWSアカウントID、IAMロール/ユーザーから選択可能。デフォルトで1バスあたり10,000 Subscriberの割当。
2. イベントの順序保証: パブリッシャーが EventGroupId を指定すると、同一IDのイベントが順序保証で配信されます。同一バス上で順序付き/順序なしを混在可能。Lambda向け同期呼び出しによりSQSを中間に置く必要が消滅。
3. Subscriberリソース: フィルタリング、ターゲット設定、リトライポリシー、デッドレターキューを単一リソースに集約。変更可能な開始時刻オプションでリプレイやオンボーディングが容易に。
4. イベント評価機能: コンテンツベースの重複排除（5分以内の再送をハッシュで検出しexactly-onceセマンティクスを提供）。JSONataによるイベント変換。Apache Avro / Protocol Buffer

## 対象ユーザー

Amazon EventBridge に、チームやアカウントを跨いでイベント駆動型アプリケーションを拡張する組織向けに特化した強化カスタムイベントバスが登場しました。

## 詳細

Amazon EventBridge に、チームやアカウントを跨いでイベント駆動型アプリケーションを拡張する組織向けに特化した強化カスタムイベントバスが登場しました。

【背景と課題】
組織がイベント駆動型アプリを拡大すると、AWSのベストプラクティスに従い複数アカウント構成となります。これまではチームごとにイベントバスを立て、クロスアカウントルールやバス間接続で結ぶ必要があり、運用複雑度の増大、購読者の可視性不足、クロスアカウント課金の累積、順序保証の為の複雑な回避策といった課題がありました。

【主な新機能】
1. 組織全体での共有: AWS RAM を使用し、単一の中央イベントバスを組織内の全AWSアカウントで共有できます。クロスアカウント権限やバス間ルーティングの設定が不要です。共有対象は組織、OU、AWSアカウントID、IAMロール/ユーザーから選択可能。デフォルトで1バスあたり10,000 Subscriberの割当。
2. イベントの順序保証: パブリッシャーが EventGroupId を指定すると、同一IDのイベントが順序保証で配信されます。同一バス上で順序付き/順序なしを混在可能。Lambda向け同期呼び出しによりSQSを中間に置く必要が消滅。
3. Subscriberリソース: フィルタリング、ターゲット設定、リトライポリシー、デッドレターキューを単一リソースに集約。変更可能な開始時刻オプションでリプレイやオンボーディングが容易に。
4. イベント評価機能: コンテンツベースの重複排除（5分以内の再送をハッシュで検出しexactly-onceセマンティクスを提供）。JSONataによるイベント変換。Apache Avro / Protocol Buffers のJSONデシリアライズ対応。
5. 新しい料金モデル: イングレス/イグレススループット課金。パブリッシャーが取り込み分、サブスクライバーが配信分を支払い、コスト配分が明確に。既存バスは「Custom event bus – classic」として継続利用可能。

【対象ユーザー】
- 複数チーム・複数アカウントでイベント駆動型アプリを拡大する組織
- プラットフォームチーム
- イベントの順序保証が必要な開発チーム（物流のドライバー位置更新など）

【利用開始地域】
US East (N. Virginia, Ohio), US West (Oregon), Europe (Ireland, Frankfurt, Stockholm, Spain), Asia Pacific (Hong Kong, Malaysia, Mumbai, Singapore, Sydney, Thailand, Tokyo)

【メリット】
- 単一バスによる運用簡素化と可視性向上
- クロスアカウントルーティング課金の消滅
- 順序保証のための複雑な回避策が不要
- パブリッシャー/サブスクライバーごとのコスト配分
- 既存バスは変更なく継続利用可能

## 参考リンク

- [元記事](https://aws.amazon.com/blogs/aws/introducing-enhanced-custom-event-buses-in-amazon-eventbridge-for-enterprise-scale-event-driven-applications/)