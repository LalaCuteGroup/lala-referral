import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { PingApi } from './pingApi';

export class TgBotServiceStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new PingApi(this, "PingApi");
  }
}
