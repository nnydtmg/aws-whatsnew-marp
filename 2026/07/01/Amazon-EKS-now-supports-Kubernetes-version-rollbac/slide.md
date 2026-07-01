---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon EKS に Kubernetes バージョンロールバック機能

Amazon EKS now supports Kubernetes version rollback

**What's New** | 2026-07-01T16:00:00

---

## 概要

- Amazon EKS が Kubernetes バージョンのロールバック機能をサポートするようになり、アップグレード後 7 日以内に前のマイナーバージョンに戻すことが可能になりました。
- 本機能は自動互換性チェックを含み、すべての AWS リージョンで追加費用なしで利用できます。

---

## 前提・背景

### これまでの課題

- アップグレード後に問題が発生した場合、7 日以内に前の Kubernetes マイナーバージョンに戻すことができます。

---

### 関連する最近の動向

- **Review release notes for Kubernetes versions on standard support**
  [詳細](https://docs.aws.amazon.com/eks/latest/userguide/kubernetes-versions-standard.html)

- **Update existing cluster to new Kubernetes version - Amazon EKS**
  [詳細](https://docs.aws.amazon.com/eks/latest/userguide/update-cluster.html)

---

## 変更内容・新機能

- この機能は、Amazon EKS が利用可能なすべての AWS リージョンで追加費用なしで提供されます。

- 本機能は、本番環境の実際の条件下で新しいバージョンを検証し、必要に応じてロールバックできるため、アップグレードワークフローに対する追加的なセーフティネットを提供します。

---

## まとめ

- Amazon EKS now supports Kubernetes version rollback について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-eks-version-rollback)

### 関連情報

- [Review release notes for Kubernetes versions on standard support](https://docs.aws.amazon.com/eks/latest/userguide/kubernetes-versions-standard.html)
- [Update existing cluster to new Kubernetes version - Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/update-cluster.html)
- [Prepare for Kubernetes version upgrades and troubleshoot](https://docs.aws.amazon.com/eks/latest/userguide/cluster-insights.html)