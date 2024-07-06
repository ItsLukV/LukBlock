/* jshint ignore:start */
import {@ButtonProperty, @CheckboxProperty, Color, @ColorProperty, @PercentSliderProperty, @SelectorProperty, @SwitchProperty, @TextProperty, @Vigilant}from "Vigilance";
/* jshint ignore:end */

import { data } from "../data";


@Vigilant("LukBlock/config", "Coleweight Settings", {
    getCategoryComparator: () => (a, b) => {
        const categories = ["General", "Commands", "Diana"];

        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})
// 'My Settings Title Example', {getCategoryComparator: () => (a, b) => {return -1},}
class Settings {

    @CheckboxProperty({
        name: "Toxic Mode",
        description: "Adds funny toxic stuff",
        category: "General",
    })
    toxicMode = false

    @TextProperty({
        name: "Rare drop message",
        description: "Rare drop message response",
        category: "General",
    })
    rareDrop = "Meow Meow";

    @TextProperty({
        name: "Prefix",
        description: "The prefix for chat commands",
        category: "Commands",
        placeholder: "+"
    })
    prefix = '+';

    @CheckboxProperty({
        name: "test",
        description: "print some cool stuff :)",
        category: "Diana",
    })
    showInqSince = true;

    constructor() {
        this.initialize(this);
        this.setCategoryDescription("General", "Settings for chat commands")
        this.setCategoryDescription("Diana", "Settings for Diana event")
        this.setCategoryDescription("Commands", "Settings for chat commands")
    }

}

export default new Settings();
