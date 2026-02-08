# VS Code Settings Security

## Overview

The repository includes shared VS Code settings for all contributors in `.vscode/settings.json`. When modifying these settings, consider security implications carefully.

## Terminal Command Auto-Approval

The `chat.tools.terminal.autoApprove` setting controls which commands Copilot Chat can run automatically without user confirmation.

### Current Configuration

```json
{
  "chat.tools.terminal.autoApprove": {
    "pnpm": true
  }
}
```

### Safe to Auto-Approve

These commands have limited, predictable scope:

- ✅ **pnpm** - Package installation and scripts
  - Limited to package manager operations
  - Runs scripts defined in `package.json`
  - Predictable behavior within workspace context

- ✅ **npm** - Package operations (if needed)
  - Similar constraints to pnpm

### Do NOT Auto-Approve

These commands can execute arbitrary workspace code and create security risks:

- ❌ **npx nx** - Can run any task defined in workspace
  - Executes custom scripts
  - Can run arbitrary code from workspace configuration

- ❌ **node** - Direct code execution
  - Runs arbitrary JavaScript
  - Full system access

- ❌ **Custom scripts** - May contain arbitrary commands
  - Unknown behavior
  - Potential security risks

## Rationale

Contributors may not expect commands to run automatically. Auto-approving commands that execute workspace code creates a security risk if malicious code is introduced through pull requests or compromised dependencies.

**Attack vector:** A malicious contributor could:
1. Add malicious code to a workspace script
2. Submit a PR that triggers Copilot to suggest running that script
3. If auto-approved, the malicious code executes without user awareness

## Guidelines for Adding Auto-Approved Commands

Before adding a new command to the auto-approve list:

1. ✅ **Command must have limited, predictable scope**
   - Should only perform package management or simple build operations
   - Should not execute arbitrary workspace code

2. ✅ **Command must not execute arbitrary workspace code**
   - No custom scripts that could be modified by contributors
   - No commands that run user-defined code from configuration files

3. ✅ **Command must not access sensitive data or credentials**
   - Should not read environment variables
   - Should not access files outside the workspace

4. ✅ **Consider if the convenience outweighs the security risk**
   - How often is this command run?
   - What's the impact of requiring manual approval?
   - Could a malicious actor exploit this?

## Review Process

When reviewing PRs that modify `.vscode/settings.json`:

- Check for new auto-approved commands
- Verify commands meet security criteria above
- Question any additions that execute workspace code
- Consider the principle of least privilege

## Best Practices

1. **Keep the auto-approve list minimal** - Only approve commands that are frequently used and have clear safety boundaries

2. **Document your decisions** - If adding a new command, explain in the PR why it's safe

3. **Regular audits** - Review the auto-approve list quarterly to ensure commands are still appropriate

4. **When in doubt, don't auto-approve** - Manual approval is safer than convenience

## Related Documentation

- [VS Code Workspace Trust](https://code.visualstudio.com/docs/editor/workspace-trust)
- [Copilot Chat Security](https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide)
- [Contributing Guidelines](../CONTRIBUTING.md)
