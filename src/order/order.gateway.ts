import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway()
export class OrderGateway  implements OnGatewayConnection, OnGatewayDisconnect {
  
  
  handleDisconnect(client: any) {
    console.log("A user disconnected");
  }
 
 
  handleConnection(client: any, ...args: any[]) {
    console.log("Someone connected");
  }
  
  
  
  @SubscribeMessage('order:create')
  handleMessage(client: any, payload: any): string {
    console.log("Client", client);
    console.log("Payload", payload);
    return 'order created!';
  }
}
