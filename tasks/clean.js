"use strict";

import del from "del";
import config from "../gulpfile.config";

function task() {
    return del(config.clean);
}

export default task;