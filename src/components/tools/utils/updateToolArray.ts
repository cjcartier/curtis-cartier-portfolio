import { getRandomInt } from 'utils/numbers';

import type { Tool } from 'types/payload-types';

/**
 * Updates the current tools array by randomly replacing one tool with a new tool from the list of all tools.
 *
 * @param currentTools - The current array of tools.
 * @param allTools - The complete list of all available tools.
 * @param updateInd - The index of the tool in the currentTools array to replace.
 * @returns The updated currentTools array.
 */
const updateToolArray = (currentTools: Tool[], allTools: Tool[], updateInd: number) => {
  const currentToolsIds = currentTools.map(tool => tool.logoId);
  const newTools = allTools.reduce(
    (acc, tool) => (currentToolsIds.includes(tool.logoId) ? acc : [...acc, tool]),
    [] as Tool[],
  );

  currentTools.splice(updateInd, 1, newTools[getRandomInt(newTools.length)]);

  return [...currentTools];
};

export default updateToolArray;
