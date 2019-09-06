import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Task from "../components/Task.stories";

storiesOf("Task", module).add(() => (<Task onClick={action("clicked")}>Hello Button</Task>));
