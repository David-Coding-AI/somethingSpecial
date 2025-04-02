import path from "path";
import * as fs from "fs";
import {exec} from "child_process";
import installerPages from "../pages/installer.pages";

const {I} = inject();

Given(/^The user has installed a driver on the system$/, function () {
    const exeName = "Zebra.exe";
    const downloadsPath = path.join(process.env.USERPROFILE || "", "Downloads", exeName);

    if (!fs.existsSync(downloadsPath)) {
        console.log(`The file ${exeName} does not exist in: ${downloadsPath}`);
        return;
    }

    console.log("Opening file...");
    exec(`"${downloadsPath}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error Trying open the file: ${error.message}`);
            return;
        }
        console.log(stdout);
    });
    I.wait(3);
    I.pressKey(["Alt","a"]);
    I.click(installer.nextButton)
    I.click(installer.nextButton)
    I.pressKey(["Alt","r"]);
    I.click(installer.finishButton)

    //I.click("//RadioButton[@Name='I accept the terms in the license agreement']");
    //I.click("  //Button[@Name='\\"Next >\\"' and @AutomationId='\"12324\"' and @ControlType='Button']\n")
});