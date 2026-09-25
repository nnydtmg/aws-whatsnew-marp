# Amazon EventBridgeがエンタープライズ規模のカスタムイベントバスを再ローンチ

Amazon EventBridge relaunches event buses for enterprise scale

**カテゴリ:** What's New
**公開日:** 2026-09-24T21:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/eventbridge-relaunches-custom-event-buses/)

このページでは、AWS What's Newで発表された「Amazon EventBridge relaunches event buses for enterprise scale」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon EventBridgeは強化されたカスタムイベントバスを再ローンチしました。チームを分離し、組織とともにスケールするイベント駆動型アプリケーションを構築できます。アカウント間共有、厳密な順序付け、CloudEvents対応、最大1年の保持、250以上のサービスへの配信をサポートします。

## このアップデートで何が変わったか

主な新機能:
- AWS Resource Access Manager (RAM) を通じて複数アカウントとカスタムイベントバスを共有可能。パブリッシャーは中央イベントバスに直接イベントを送信できる
- 新しいイベント公開APIにより、CloudEventsなどの一般的なJSONベースイベント形式でスキーマを変更せずに公開可能
- 組み込み保持が24時間から最大1年まで拡張可能。アプリケーションエラーからの回復や歴史データによる新コンポーネントの初期化が可能
- 新規Subscriberリソースでイベントをフィルタリングし、250以上のAWSサービスに配信
- 厳密な順序付け（strict ordering）をネイティブサポート。受信した順番どおりにイベントを処理
- コンテンツベースの自動重複除去（content-based deduplication）
- 高度なイベント変換をサポート

## 対象ユーザー

利用開始: AWS Management Console、AWS CLI、AWS SDKs、Serverless Agent skill、AWS CloudFormation

## 詳細

Amazon EventBridgeが強化されたCustom event busを再ローンチしました。チームを分離し組織とともにスケールするイベント駆動型アプリケーションを構築できます。

主な新機能:
- AWS Resource Access Manager (RAM) を通じて複数アカウントとカスタムイベントバスを共有可能。パブリッシャーは中央イベントバスに直接イベントを送信できる
- 新しいイベント公開APIにより、CloudEventsなどの一般的なJSONベースイベント形式でスキーマを変更せずに公開可能
- 組み込み保持が24時間から最大1年まで拡張可能。アプリケーションエラーからの回復や歴史データによる新コンポーネントの初期化が可能
- 新規Subscriberリソースでイベントをフィルタリングし、250以上のAWSサービスに配信
- 厳密な順序付け（strict ordering）をネイティブサポート。受信した順番どおりにイベントを処理
- コンテンツベースの自動重複除去（content-based deduplication）
- 高度なイベント変換をサポート

既存のCustom event busは「Custom event bus - classic」に改名。既存APIは変更なし。

利用開始: AWS Management Console、AWS CLI、AWS SDKs、Serverless Agent skill、AWS CloudFormation

提供リージョン（14リージョン）:
- 米国: 北バージニア、オハイオ、オレゴン
- ヨーロッパ: アイルランド、フランクフルト、ストックホルム、スペイン
- アジアパシフィック: 東京、シンガポール、シドニー、マレーシア、タイ、ムンバイ、香港

価格: イベント数ではなくデータ転送量に応じて課金する新価格モデル。ワークロードがスケールするほどコストが下がる

対象: チームを分離しスケールするイベント駆動型アプリケーションを構築するエンタープライズのお客様

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/eventbridge-relaunches-custom-event-buses/)