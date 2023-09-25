import { BaseComponent } from "../../base/component";
import { ComponentMetadata } from "../../decorator/component";

@ComponentMetadata({
  selector: "sport",
  templateUrl: "/sport/sport.html",
})
export class Sport extends BaseComponent {
  sports = this.appState.addState(this.fetchSport(), "sports") || [];

  fetchSport() {
    const data = [
      {
        name: "MC vs MU",
      },
      {
        name: "ABC vs XYZ",
      },
    ];
    
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 1000);
    });
  }
}
