---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Cognitoがポイントインタイムリカバリをサポート

Amazon Cognito now supports point-in-time recovery

**What's New** | 2026-11-18T17:00:00

---

## 概要

- Amazon Cognitoにポイントインタイムリカバリ（PITR）が追加され、ユーザープールのユーザーデータを以前の時点へ復元できるようになりました。
- EssentialsおよびPlusプランのお客様に追加料金なしで自動的に提供されます。
- 復旧ウィンドウはEssentialsで1日、Plusで14日です。

---

## 前提・背景

### これまでの課題

Amazon Cognito now supports point-in-time recovery (PITR)。ユーザープールのユーザーデータを以前の時点に復元できます。

---

### 関連する最近の動向

- **Point-in-time recovery for user pools**
  [詳細](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-point-in-time-recovery.html)

- **Amazon Cognito now supports point-in-time recovery**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-point-...

---

## 変更内容・新機能

【新機能】
- 復旧ポイントを選択し、ユーザー、グループ、MFA設定、パスキーの作成・更新・削除数をプレビューしたうえで、復旧を開始またはキャンセル可能
- 復旧されたユーザーは識別子、パスワード、MFA設定、パスキーを保持するため、資格情報をリセットせずにサインイン可能
- スクリプトによる誤削除・誤変更時に、実行直前の状態へ復元可能
- 同じユーザープール内でインプレース復元（ID・ARN・設定は維持）

【復旧ウィンドウ】
- Lite: 非対応
- Essentials: 最大1日
- Plus: 最大14日
- 追加料金なしで自動有効

---

## ユースケース

【ユースケース】
- 独自のエクスポート・復元プロセスを構築・維持していたお客様
- 誤ってユーザーを削除・変更してしまった場合に迅速に復元したいお客様
- 管理スクリプト、アプリのバグ、無断な操作によるユーザーデータの捕滅

---

## まとめ

- Amazon Cognito now supports point-in-time recovery について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-point-in-time-recovery/)

### 関連情報

- [Point-in-time recovery for user pools](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-point-in-time-recovery.html)
- [Amazon Cognito now supports point-in-time recovery](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-point-in-time-recovery/)
- [Multi-Region replication for user pools](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-multi-region.html)