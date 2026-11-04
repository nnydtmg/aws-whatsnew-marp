# Amazon ECS Managed Daemonsがjson-fileログ収集をサポート

Amazon ECS Managed Daemons can now collect json-file logs from application containers on Amazon ECS Managed Instances

**カテゴリ:** What's New
**公開日:** 2026-11-04T21:29:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-ecs-managed-instances-json-file-log-driver/)

このページでは、AWS What's Newで発表された「Amazon ECS Managed Daemons can now collect json-file logs from application containers on Amazon ECS Managed Instances」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon ECS Managed Instances上でjson-file形式のアプリケーションログをManaged Daemonsが収集できるようになりました。任意のオブザーバビリティエージェントでログを任意の宛先へ転送したいお客様向けの機能です。

## このアップデートで何が変わったか

Amazon Elastic Container Service (Amazon ECS) は、Amazon ECS Managed Instances向けのjson-fileログドライバー対応と、Amazon ECS Managed Daemons向けのログドライバーボリュームを導入しました。これらにより、任意のオブザーバビリティエージェントでアプリケーションログを収集し、任意の宛先へ転送できます。アプリケーションコンテナは標準のDocker json-file形式でローカルファイルにログを書き出せます。マネージドデーモンはボリュームマウントにより、ホストのバインドマウントパスやルート権限なしでログを読み取れます。各インスタンス上の1つのマネージドデーモンが、json-fileログドライバーを使用するすべてのアプリケーションコンテナからログを収集できます。ログはコンテナIDで命名された専用ディレクトリに保持され、コンテナ削除まで残ります。利用開始には、アプリケーションタスク定義のlogConfigurationでログドライバーをjson-fileに設定し、daemonタスク定義でlo

## 対象ユーザー

Amazon Elastic Container Service (Amazon ECS) は、Amazon ECS Managed Instances向けのjson-fileログドライバー対応と、Amazon ECS Managed Daemons向けのログドライバーボリュームを導入しました。これらにより、任意のオブザーバビリティエージェントでアプリケーションログを収集し、任意の宛先へ転送できます。アプリケーションコンテナは標準のDocker json-file形式でローカルファイルにログを書き出せます。マネージドデーモンはボリュームマウントにより、ホストのバインドマウントパスやルート権限な

## 詳細

Amazon Elastic Container Service (Amazon ECS) は、Amazon ECS Managed Instances向けのjson-fileログドライバー対応と、Amazon ECS Managed Daemons向けのログドライバーボリュームを導入しました。これらにより、任意のオブザーバビリティエージェントでアプリケーションログを収集し、任意の宛先へ転送できます。アプリケーションコンテナは標準のDocker json-file形式でローカルファイルにログを書き出せます。マネージドデーモンはボリュームマウントにより、ホストのバインドマウントパスやルート権限なしでログを読み取れます。各インスタンス上の1つのマネージドデーモンが、json-fileログドライバーを使用するすべてのアプリケーションコンテナからログを収集できます。ログはコンテナIDで命名された専用ディレクトリに保持され、コンテナ削除まで残ります。利用開始には、アプリケーションタスク定義のlogConfigurationでログドライバーをjson-fileに設定し、daemonタスク定義でlogDriverVolumeConfigurationを指定したボリュームを登録してmountPointsでマウントします。AWS Management Console、AWS CLI、API、AWS SDKs、AWS CloudFormationで設定可能です。追加料金なしで、Amazon ECS Managed InstancesおよびManaged Daemonsが利用可能なすべての商用AWSリージョンで利用できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-ecs-managed-instances-json-file-log-driver/)