import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>
    <button (click)="map()">Map</button>
    <button (click)="set()">Set</button>

    <button (click)="reveres([1, 2, 3, 4, 5, 6, 7], 3)">[5,6,7,1,2,3,4]</button>
    <button (click)="reveres([-1, -100, 3, 99], 2)">[3,99,-1,-100]</button>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  organizationSet: Set<string>;
  organizationMap: Map<number, string>;

  reveres(nums, k) {
    let start = nums[0];
    console.log(nums);
    for (var i = 0; i < k; i++) {
      start = nums[0];
      for (let n = 0; n < nums.length; n++) {
        nums[n + 1] = nums[n];
      }
      nums[nums.length - 1] = start;
    }
    console.log(nums);
  }

  constructor() {
    this.organizationSet = new Set<string>();
    this.organizationMap = new Map<number, string>();

    this.organizationSet.add("org1");
    this.organizationSet.add("org2");
    this.organizationSet.add("org3");
    this.organizationSet.add("org1");
    this.organizationSet.add("org3");
    this.organizationSet.add("org3");
    this.organizationSet.add("org1");

    this.organizationMap.set(1, "org1");
    this.organizationMap.set(2, "org2");
    this.organizationMap.set(3, "org3");
    this.organizationMap.set(4, "org1");
    this.organizationMap.set(5, "org3");
    this.organizationMap.set(6, "org1");
  }

  map() {
    this.organizationMap.forEach((value, key) => {
      console.log(key + " " + value);
    });
  }

  set() {
    this.organizationSet.forEach(v => {
      console.log(v);
    });
  }
}
