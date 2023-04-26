import { Component } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent {
  icons: {
    type:
      | 'x'
      | 'chevron-down'
      | 'chevron-right'
      | 'coins'
      | 'delivery'
      | 'delivery-2'
      | 'error-circled'
      | 'government-capitol'
      | 'heart'
      | 'image'
      | 'invalid-email'
      | 'invalid-zip-code'
      | 'like'
      | 'lock'
      | 'message-call'
      | 'mobile'
      | 'monitor'
      | 'mouse'
      | 'notepad'
      | 'paper'
      | 'person'
      | 'shopping-cart'
      | 'star'
      | 'verify'
      | 'wifi'
      | 'error'
      | 'success'
      | 'warning'
      | 'arrow-left'
      | 'arrow-right'
      | 'bank-government'
      | 'callout'
      | 'check';
    label: string;
  }[] = [
    {
      type: "check",
      label: "Check"
    },
    {
      type: "callout",
      label: "Callout"
    },
    {
      type: "bank-government",
      label: "Bank government"
    },
    {
      type: "arrow-right",
      label: "Arrow right"
    },
    {
      type: "arrow-left",
      label: "Arrow left"
    },
    {
      type: "warning",
      label: "Warning"
    },
    {
      type: "success",
      label: "Success"
    },
    {
      type: "error",
      label: "Error"
    },
    {
      type: "wifi",
      label: "Wifi"
    },
    {
      type: "verify",
      label: "Verify"
    },
    {
      type: "star",
      label: "Star"
    },
    {
      type: "shopping-cart",
      label: "Shopping cart"
    },
    {
      type: "person",
      label: "Person"
    },
    {
      type: "paper",
      label: "Paper"
    },
    {
      type: "x",
      label: "X"
    },
    {
      type: "chevron-down",
      label: "Chevron down"
    },
    {
      type: "chevron-right",
      label: "Chevron right"
    },
    {
      type: "coins",
      label: "Coins"
    },
    {
      type: "delivery",
      label: "Delivery"
    },
    {
      type: "delivery-2",
      label: "Delivery 2"
    },
    {
      type: "error-circled",
      label: "Error circled"
    },
    {
      type: "government-capitol",
      label: "Government capitol"
    },
    {
      type: "heart",
      label: "Heart"
    },
    {
      type: "image",
      label: "Image"
    },
    {
      type: "invalid-email",
      label: "Invalid email"
    },
    {
      type: "invalid-zip-code",
      label: "Invalid zip code"
    },
    {
      type: "like",
      label: "Like"
    },
    {
      type: "lock",
      label: "Lock"
    },
    {
      type: "message-call",
      label: "Message call"
    },
    {
      type: "mobile",
      label: "Mobile"
    },
    {
      type: "monitor",
      label: "Monitor"
    },
    {
      type: "mouse",
      label: "Mouse"
    },
    {
      type: "notepad",
      label: "Notepad"
    },
    {
      type: "paper",
      label: "Paper"
    },
  ];

}
