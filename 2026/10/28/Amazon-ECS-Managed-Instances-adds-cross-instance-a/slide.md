---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon ECS Managed InstancesがクロスインスタンスとSpot統合を追加

Amazon ECS Managed Instances adds cross-instance and Spot consolidation

**What's New** | 2026-10-28T18:00:00

---

## 概要

- Amazon ECS Managed Instancesにクロスインスタンス統合とSpot統合が追加され、複数インスタンスのタスク再配置により利用率向上とコスト削減を実現します。
- 本機能は追加料金なしですべてのAWSリージョンの既存および新規キャパシティプロバイダーに自動適用されます。

---

## 前提・背景

### これまでの課題

- Amazon ECS Managed Instancesにクロスインスタンス統合およびSpot統合が追加されました。
- クロスインスタンス統合は、複数の未使用インスタンス上のタスクをまとめて評価し、より少ないインスタンスへ詰め込むことで利用率を高め、コストを削減します。
- Spot統合は、代替キャパシティの可用性を確認したうえで、未使用のSpotインスタンスを同様に統合します。
- これまでの最適化は各インスタンスを単独評価していたため、インスタンスタイプの範囲が狭いキャパシティプロバイ

---

### 関連する最近の動向

- **Amazon ECS Managed Instances adds cross-instance and Spot consolidation - AWS**
  [詳細](https://aws.amazon.com/a...

---

## 変更内容・新機能

- Amazon ECS Managed Instancesにクロスインスタンス統合およびSpot統合が追加されました。
- クロスインスタンス統合は、複数の未使用インスタンス上のタスクをまとめて評価し、より少ないインスタンスへ詰め込むことで利用率を高め、コストを削減します。
- Spot統合は、代替キャパシティの可用性を確認したうえで、未使用のSpotインスタンスを同様に統合します。
- これまでの最適化は各インスタンスを単独評価していたため、インスタンスタイプの範囲が狭いキャパシティプロバイダーでは統合の機会が少なかった。
- AWSのテストでは、c9gインスタンス（最小4xlarge）のキャパシティプロバイダーで、261タスク（各1 vCPU / 1.94 GiB）を実行した場合、フリートが19インスタンスから13インスタンスに減少。CPU利用率は42%から91%、メモリ利用率は41%から88%に向上。
- start-before-stopのグレースフルなタスク置換で可用性を維持しながら統合します。
- 追加料金なしですべてのAWSリージョンで利用可能。既存および新規のECS 

---

## 効果・メリット

- - Amazon ECS Managed Instancesにクロスインスタンス統合およびSpot統合が追加されました。
- - クロスインスタンス統合は、複数の未使用インスタンス上のタスクをまとめて評価し、より少ないインスタンスへ詰め込むことで利用率を高め、コストを削減します。
- - Spot統合は、代替キャパシティの可用性を確認したうえで、未使用のSpotインスタンスを同様に統合します。

---

## まとめ

- Amazon ECS Managed Instances adds cross-instance and Spot consolidation について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/ecs-managed-instances-consolidation/)

### 関連情報

- [Amazon ECS Managed Instances adds cross-instance and Spot consolidation - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/ecs-managed-instances-consolidation/)
- [Amazon ECS Managed Instances infrastructure optimization](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/managed-instances-infrastructure-optimization.html)
- [Amazon ECS Managed Instances now supports Amazon EC2 Spot Instances](https://aws.amazon.com/about-aws/whats-new/2025/12/amazon-ecs-managed-instances-ec2-spot-instances)
- [Announcing Amazon ECS Managed Instances for containerized applications](https://aws.amazon.com/blogs/aws/announcing-amazon-ecs-managed-instances-for-containerized-applications)