# @awboost/aws-vault-credentials

Load current AWS credentials from [aws-vault](https://github.com/99designs/aws-vault).

## Usage

```typescript
import { S3Client } from '@aws-sdk/client-s3';
import { AwsVaultCredentials } from '@awboost/aws-vault-credentials';

const s3 = new S3Client({
  crentials: AwsVaultCredentails.provide({
    awsVaultPath: 'aws-vault', // path to aws-vault
    durationSeconds: undefined, // length in seconds for the session
    guiPrompt: false, // true to show a platform-specific GUI MFA prompt
    mfaToken: undefined, // manually pass a specific MFA token
    noSession: false, // true to use the long-term credentials
    profileName: 'your-profile', // the name of the aws-vault profile to use
    prompt: undefined, // a named prompt option (see aws-vault options)
  }),
});
```

#### `guiPrompt` option

This will choose `osascript` on darwin and `wincredui` on win32. It is ignored on other platforms.
