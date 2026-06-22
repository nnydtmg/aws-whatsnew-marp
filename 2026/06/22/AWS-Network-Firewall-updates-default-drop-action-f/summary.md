# AWS Network Firewall のデフォルト設定が改善 - 接続信頼性向上

AWS Network Firewall updates default drop action for improved connection reliability

**Category:** What's New
**Published Date:** 2026-06-22T17:00:00
**Original Article:** https://aws.amazon.com/about-aws/whats-new/2026/06/aws-network-firewall-updates-default-drop-action

---

## Summary

AWS Network Firewallのデフォルトステートフルアクションが新設定に変更され、接続信頼性が向上します。新規ポリシー作成時に自動的に適用されるため、ユーザーは追加の対応なしに改善を享受できます。

## What Changed

- AWS Network Firewallのデフォルト設定が新設定に変更
- 従来の設定では、正当なサーバーからクライアントへのTCPパケットが誤ってドロップ
- 新設定により、診断が困難な断続的な接続障害の問題が解決
- 新しいファイアウォールポリシーに自動的に適用
- すべてのAWSリージョンで利用可能

## Details

### Background

AWS Network Firewallは、VPCの保護をするマネージドファイアウォールサービスです。これまでのデフォルト設定では、TCPセッションの確立後、正当なサーバーからクライアントへのパケットが誤ってドロップされる問題がありました。

### Changes Made

- New Default Setting: Application drop established (server-directed only)
- Previous Setting: Application drop established (bidirectional)
- Improvement: Server-to-client legitimate packets are no longer dropped
- Result: Connection reliability improved

### Deployment

1. New policies automatically get the improved default setting
2. No user action required for new policies
3. Available in all AWS regions
4. Existing policies can be manually updated if needed

## Benefits

1. Improved connection reliability
2. Resolved intermittent connection failures
3. Automatic application - no user action needed
4. Enhanced security with safer defaults
5. Reduced troubleshooting time

## Getting Started

- Create new firewall policies - improved settings apply automatically
- Existing policies can be updated manually if necessary
- Refer to AWS documentation for PQC considerations

## Related Resources

- AWS Network Firewall Documentation: https://docs.aws.amazon.com/network-firewall/
- Troubleshooting Rules: https://docs.aws.amazon.com/network-firewall/latest/developerguide/troubleshooting-rules.html
