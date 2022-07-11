import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { PingApi } from './pingApi';
import { Table } from 'aws-cdk-lib/aws-dynamodb';

interface TgBotServiceStackProps extends StackProps {
  readonly pingTable: Table;
}

export class TgBotServiceStack extends Stack {
  constructor(scope: Construct, id: string, props: TgBotServiceStackProps) {
    const {pingTable} = props;
    super(scope, id, props);

    new PingApi(this, "PingApi", {
      pingTable,
    });
  }
}
