import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: "app-keyboard",
  templateUrl: "./keyboard.component.html",
  styleUrls: ["./keyboard.component.css"]
})
export class KeyboardComponent implements OnInit{
  value = "";
  keyboard: Keyboard;
  public action: any;

  public dni =  '';
  public password = '';
  public isDni = true;

  constructor(private route: ActivatedRoute, private router:Router) {
    this.action = this.route.snapshot.paramMap.get("action");
    if (!this.action) {
      this.action = 'ingreso';
    }
  }

  ngOnInit() {
    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button)
    });
  }

  onChange = (input: string) => {
    this.value = input;
    console.log("Input changed", input);
    if (this.isDni) {
      this.dni = this.value;
    } else {
      this.password = this.value;
    }
  };

  onKeyPress = (button: string) => {
    console.log("Button pressed", button);
    if (button === "{enter}") {
      if (this.isDni) {
        this.isDni = !this.isDni;
        this.value = '';
        this.keyboard.clearInput();
        // this.keyboard.input.default = ''
      } else {
        //go to ingreso
        console.log(this.dni, this.password);
        this.router.navigate(['ingreso'])
      }
    }

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value);
    if (this.isDni) {
      this.dni = this.value;
    } else {
      this.password = this.value;
    }
  };

  handleShift = () => {
    let currentLayout = this.keyboard.options.layoutName;
    let shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  };
}
