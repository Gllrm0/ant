import { Component } from "@angular/core";
import { NzMessageService } from "ng-zorro-antd";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ant-gllrm";
  cancel(): void {
    this.nzMessageService.info("click cancel");
  }

  confirm(): void {
    this.nzMessageService.info("click confirm");
  }
  constructor(private nzMessageService: NzMessageService) {}
}
