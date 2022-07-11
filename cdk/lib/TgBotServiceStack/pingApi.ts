import { Fn } from "aws-cdk-lib";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import { ITable, Table } from "aws-cdk-lib/aws-dynamodb";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { NodejsFunction, NodejsFunctionProps } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { join } from "path";

const pingTableArn = Fn.importValue('PingTableArn');

export class PingApi extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const pingTable: ITable = Table.fromTableArn(this, 'ITable', pingTableArn);

    const lambdaProps: NodejsFunctionProps = {
      runtime: lambda.Runtime.NODEJS_16_X, 
      bundling: {
        externalModules: [
          'aws-sdk', 
        ],
      },
      depsLockFilePath: join(__dirname, '../../src/lambdas', 'package-lock.json'),
      environment: {
        TABLE_NAME: pingTable.tableName,
      },
    }

    const pingHandler = new NodejsFunction(this, "PingHandler", {
      ...lambdaProps,
      entry: join(__dirname, '../../src/lambdas/api', 'ping.ts'),
    });

    const api = new apigateway.RestApi(this, "ping-api", {
      restApiName: "Tg bot Service",
      description: "Testing"
    });

    const getWidgetsIntegration = new apigateway.LambdaIntegration(pingHandler);

    pingTable.grantReadWriteData(pingHandler);

    api.root.addMethod("GET", getWidgetsIntegration);
  }
}
