const styles = [
	["filled-rectangle", createFilledRectangleRow],
	["hollow-rectangle", createHollowRectangleRow],
	["alternating-rectangle", createAlternateRectangleRow],
	["spaced-alternating-rectangle", createSpacedAlternatingRectangleRow],
	["triangle", createTriangleRow],
	["right-aligned-triangle", createRightAlignedTriangle],
	["diamond", createDimondRow],
	["hollow-diamond", createHollowDimondRow]
];

function isValidStyle(styleCandidate) {
	for (const style of styles[0]) {
		if (style === styleCandidate) {
			return true;
		}
	}

	return false;
}

function isEven(number) {
	return number % 2 === 0;
}

function getTotalCoumnOfDimondRow(rowPosition, size) {
	if (rowPosition > Math.floor(size / 2)) {
		const mapedPostion = (size - 1) - rowPosition;
		return mapedPostion + Math.ceil(size / 2);
	}

	return rowPosition + Math.ceil(size / 2);
}

function getTotalStars(rowPosition, size) {
	if (rowPosition > Math.floor(size / 2)) {
		const mapedPostion = (size - 1) - rowPosition;
		return (mapedPostion * 2) + 1;
	}

	return (rowPosition * 2) + 1;
}

function createDimondRow(parameters) {
	const rowPosition = parameters[2];
	const size = isEven(parameters[0]) ? parameters[0] - 1 : parameters[0];
	const totalColumns = getTotalCoumnOfDimondRow(rowPosition, size);
	const totalStarts = getTotalStars(rowPosition, size);
	let row = "";

	for (let startPostion = 0; startPostion < totalStarts; startPostion++) {
		row += "*";
	}

	return row.padStart(totalColumns);
}

function getValidCharForHollowDimond(position, lastPostion) {
	return position === 0 || position === lastPostion ? "*" : " ";
}

function createHollowDimondRow(parameters) {
	const rowPosition = parameters[2];
	const size = isEven(parameters[0]) ? parameters[0] - 1 : parameters[0];
	const totalColumns = getTotalCoumnOfDimondRow(rowPosition, size);
	const totalStars = getTotalStars(rowPosition, size);
	let row = "";

	for (let starPostion = 0; starPostion < totalStars; starPostion++) {
		const charToAdd = getValidCharForHollowDimond(starPostion, totalStars - 1);
		row += charToAdd;
	}

	return row.padStart(totalColumns);
}

function createFilledRectangleRow(parameters) {
	let row = "";
	const totalColumns = parameters[1];

	for (let columnIndex = 0; columnIndex < totalColumns; columnIndex++) {
		row += "*";
	}

	return row;
}

function isCharForHollowRec(rowPosi, columnPosi, totalRows, totalColoums) {
	const isFirstOrLastRow = rowPosi === 0 || rowPosi === totalRows - 1;
	const isFirstColumn = columnPosi === 0;
	const isLastColumn = columnPosi === totalColoums - 1;

	return isFirstOrLastRow || isFirstColumn || isLastColumn;
}

function createHollowRectangleRow(parameters) {
	let row = "";
	const totalRows = parameters[0];
	const totalColumns = parameters[1];
	const rowPostion = parameters[2];

	for (let columnIndex = 0; columnIndex < totalColumns; columnIndex++) {
		const isValidChar = isCharForHollowRec(rowPostion, columnIndex, totalRows,
			totalColumns);
		const charToadd = isValidChar ? "*" : " ";
		row += charToadd;
	}

	return row;
}

function createAlternateRectangleRow(parameters) {
	let row = "";
	const totalColumns = parameters[1];
	const rowPostion = parameters[2];

	for (let columnIndex = 0; columnIndex < totalColumns; columnIndex++) {
		const charToadd = rowPostion % 2 === 0 ? "*" : "-";
		row += charToadd;
	}

	return row;
}

function createTriangleRow(parameters) {
	const rowPostion = parameters[2];
	let row = "";

	for (let columnIndex = 0; columnIndex < rowPostion + 1; columnIndex++) {
		row += "*";
	}

	return row;
}

function createRightAlignedTriangle(parameters) {
	const totalRows = parameters[0];

	const rawRow = createTriangleRow(parameters);
	const row = rawRow.padStart(totalRows);

	return row;
}

function createSpacedAlternatingRectangleRow(parameters) {
	const rowIndex = parameters[2];
	const totalColumns = parameters[1];
	const rowChars = ["*", "-", " "]
	const selecterRowChar = rowChars[rowIndex % 3];
	let row = "";

	for (let columnIndex = 0; columnIndex < totalColumns; columnIndex++) {
		row += selecterRowChar;
	}

	return row;
}

function createRow(style, totalRows, totalColumns, rowIndex) {
	const parameters = [totalRows, totalColumns, rowIndex];
	for (const styleCandidate of styles) {
		if (style === styleCandidate[0]) {
			console.log(styleCandidate[0]);
			return styleCandidate[1](parameters);
		}
	}
}

function isTrianglePattern(userChosenStyle) {
	const stylesList = [
		"right-aligned-triangle", "triangle",
		"hollow-diamond", "diamond"
	];

	for (const style of stylesList) {
		if (style === userChosenStyle) {
			return true;
		}
	}

	return false;
}

function getValidFormatPattern(pattern, lengthOfRow) {
	const formatedPattern = [];
	let row = "";

	for (const char of pattern) {
		if (char === "\n") {
			row = row.padEnd(lengthOfRow);
			formatedPattern.push(row);
			row = "";
		} else {
			row += char;
		}
	}

	row = row.padEnd(lengthOfRow);
	formatedPattern.push(row);

	return formatedPattern;
}

function concatTwoPatterns(pattern, pattern2, dimensions) {
	const result = [];
	const lengthOfRow = dimensions[0];
	const patternInRightDimen = getValidFormatPattern(pattern2, lengthOfRow);
	const pattern2InRightDimen = getValidFormatPattern(pattern, lengthOfRow);

	for (let index = 0; index < patternInRightDimen.length; index++) {
		const preffix = patternInRightDimen[index].concat(" ");
		const suffix = pattern2InRightDimen[index];
		const row = preffix.concat(suffix);
		result.push(row);
	}

	return result.join("\n");
}

function generateTwoPatterns(style, dimensions, secondStyle) {
	const firstPattern = generatePattern(style, dimensions);
	const secondPattern = generatePattern(secondStyle, dimensions);
	const concatenatedPatterns = concatTwoPatterns(firstPattern, secondPattern,
		dimensions);

	return concatenatedPatterns;
}

function generatePattern(style, dimensions, secondStyle) {
	const pattern = [];
	const totalRows = isTrianglePattern(style) ? dimensions[0] : dimensions[1];
	const totalColums = dimensions[0];

	if (secondStyle !== undefined) {
		return generateTwoPatterns(style, dimensions, secondStyle);
	}

	if (totalRows === 0 || totalColums === 0) {
		return "";
	}

	for (let rowIndex = 0; rowIndex < totalRows; rowIndex++) {
		const row = createRow(style, totalRows, totalColums, rowIndex);
		pattern.push(row);
	}

	return pattern.join("\n");
}

function testGeneratePattern(style, dimensions, expected, failed, style2) {
	const actual = generatePattern(style, dimensions, style2);
	console.log(actual);
	if (actual !== expected) {
		failed.push([style, dimensions, actual, expected]);
	}
}

function testFilledRectanglePatterns(failed) {
	testGeneratePattern('filled-rectangle', [0, 0], '', failed);
	testGeneratePattern('filled-rectangle', [10, 0], '', failed);
	testGeneratePattern('filled-rectangle', [1, 0], '', failed);
	testGeneratePattern('filled-rectangle', [0, 10], '', failed);//failing
	testGeneratePattern('filled-rectangle', [3, 3], "***\n***\n***", failed);
	testGeneratePattern('filled-rectangle', [1, 3], "*\n*\n*", failed);
}

function testHollowRectanglePatterns(failed) {
	testGeneratePattern("hollow-rectangle", [3, 3], "***\n* *\n***", failed);
	testGeneratePattern("hollow-rectangle", [3, 2], "***\n***", failed);
	testGeneratePattern("hollow-rectangle", [3, 1], "***", failed);
	testGeneratePattern("hollow-rectangle", [10, 0], "", failed);
	testGeneratePattern("hollow-rectangle", [0, 0], "", failed);
	testGeneratePattern("hollow-rectangle", [0, 10], "", failed);//failing
	testGeneratePattern("hollow-rectangle", [5, 5],
		"*****\n*   *\n*   *\n*   *\n*****", failed);
}

function testAlternatingRectanglePatterns(failed) {
	testGeneratePattern("alternating-rectangle", [5, 5],
		"*****\n-----\n*****\n-----\n*****", failed);
	testGeneratePattern("alternating-rectangle", [1, 1], "*", failed);
	testGeneratePattern("alternating-rectangle", [2, 2], "**\n--", failed);
	testGeneratePattern("alternating-rectangle", [1, 2], "*\n-", failed);
	testGeneratePattern("alternating-rectangle", [2, 3], "**\n--\n**", failed);
	testGeneratePattern("alternating-rectangle", [3, 2], "***\n---", failed);
	testGeneratePattern("alternating-rectangle", [3, 0], "", failed);
	testGeneratePattern("alternating-rectangle", [0, 2], "", failed);
	testGeneratePattern("alternating-rectangle", [0, 0], "", failed);
}

function testTrianglePatterns(failed) {
	testGeneratePattern("triangle", [1], "*", failed);
	testGeneratePattern("triangle", [2], "*\n**", failed);
	testGeneratePattern("triangle", [3], "*\n**\n***", failed);
	testGeneratePattern("triangle", [5], "*\n**\n***\n****\n*****", failed);
	testGeneratePattern("triangle", [0], "", failed);
}

function testRightAlignedTrianglePatterns(failed) {
	testGeneratePattern("right-aligned-triangle", [0], "", failed);
	testGeneratePattern("right-aligned-triangle", [1], "*", failed);
	testGeneratePattern("right-aligned-triangle", [2], " *\n**", failed);
	testGeneratePattern("right-aligned-triangle", [3], "  *\n **\n***", failed);
	testGeneratePattern("right-aligned-triangle", [4], "   *\n  **\n ***\n****"
		, failed);
}

function testSpaceAlternatingTrianglePatterns(failed) {

	testGeneratePattern('spaced-alternating-rectangle', [0, 0], '', failed);
	testGeneratePattern('spaced-alternating-rectangle', [10, 0], '', failed);
	testGeneratePattern('spaced-alternating-rectangle', [1, 0], '', failed);
	testGeneratePattern('spaced-alternating-rectangle', [0, 10], '', failed);
	testGeneratePattern('spaced-alternating-rectangle', [3, 3], "***\n---\n   ",
		failed);
	testGeneratePattern('spaced-alternating-rectangle', [5, 3],
		"*****\n-----\n     ", failed);
	testGeneratePattern('spaced-alternating-rectangle', [1, 3], "*\n-\n ",
		failed);
}

function testDimondPatterns(failed) {
	testGeneratePattern("diamond", [5], '', failed);
}

function testHollowDimondPattern(failed) {
	testGeneratePattern("hollow-diamond", [5], 'kjashfoiuva', failed);
}

function testTwoPattersTogether(failed) {
	// testGeneratePattern("hollow-diamond", [5], 'kjashfoiuva', failed, "diamond");
	// testGeneratePattern("diamond", [5], 'kjashfoiuva', failed, "hollow-diamond");
	// testGeneratePattern("triangle", [5], 'kjashfoiuva', failed, "hollow-diamond");
	testGeneratePattern("right-aligned-triangle", [5], 'sakib', failed, "hollow-diamond");
}

function testAll() {
	const failed = [];
	// testFilledRectanglePatterns(failed);
	// testHollowRectanglePatterns(failed);
	// testAlternatingRectanglePatterns(failed);
	// testTrianglePatterns(failed);
	// testRightAlignedTrianglePatterns(failed);
	// testSpaceAlternatingTrianglePatterns(failed);
	// testDimondPatterns(failed);
	// testHollowDimondPattern(failed);
	testTwoPattersTogether(failed);

	console.table(failed);
}

testAll();
//0
//1
//2
//3 --> 5 -3  == 2 - 1 
//4 --> 5 - 4 == 1 - 1 

/*  *
	 ***
	*****
	 ***
		*
		* */
// 3 --> 3
// 4 --> 1 size 5