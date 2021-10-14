// Task: Learn how to initiate the driver and verify connectivity
// Outcome: verifyConnectivity on the driver exported from /src/neo4j.js should return true

import { getDriver } from "../../src/neo4j.js"
import { Driver } from 'neo4j-driver'

describe('01. Initiate Driver', () => {
    it('Driver has been instantiated', () => {
        const driver = getDriver()
        expect(driver).toBeInstanceOf(Driver)
    })

    it('Driver can verify connectivity', () => {
        const driver = getDriver()
        expect(driver).toBeInstanceOf(Driver)

        expect(driver.verifyConnectivity()).toEqual(true)
    })
})