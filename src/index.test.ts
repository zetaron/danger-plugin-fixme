import fixme from "./index"

declare const global: any

jest.mock("fs")

describe("fixme()", () => {
  const MOCK_FILE_INFO = {
    "path/to/tests/index.test.js": "/* @FIXME: some lala to be fixed */",
    "path/to/tests/new.index.test.js": "/* @FIXME: some new lala to be fixed */",
    "tests/subdirectory/myTest.js": "/* @TODO: somethings need to be done */",
  }

  beforeEach(() => {
    require("fs").__setMockFiles(MOCK_FILE_INFO)

    global.fail = jest.fn()
  })

  afterEach(() => {
    global.fail = undefined
  })

  it("checks modified_files and created_files", () => {
    global.danger = {
      git: {
        modified_files: ["path/to/tests/index.test.js"],
        created_files: ["path/to/tests/new.index.test.js"],
      },
    }

    fixme()

    expect(global.fail).toHaveBeenCalledWith("a `FIXME` was left in: path/to/tests/index.test.js")
  })

  it("allows to set custom pattern", () => {
    global.danger = {
      git: {
        modified_files: ["tests/subdirectory/myTest.js"],
        created_files: [],
      },
    }

    fixme(["TODO"])

    expect(global.fail).toHaveBeenCalledWith("a `TODO` was left in: tests/subdirectory/myTest.js")
  })

  it("allows to set multiple custom pattern", () => {
    global.danger = {
      git: {
        modified_files: ["path/to/tests/index.test.js", "tests/subdirectory/myTest.js"],
        created_files: [],
      },
    }

    fixme(["FIXME", "TODO"])

    expect(global.fail).toHaveBeenCalledWith("a `FIXME` was left in: path/to/tests/index.test.js")

    expect(global.fail).toHaveBeenCalledWith("a `TODO` was left in: tests/subdirectory/myTest.js")
  })
})
