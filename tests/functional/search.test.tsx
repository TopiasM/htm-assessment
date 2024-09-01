import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import SearchForm from '../../src/components/SearchForm'
import userEvent from '@testing-library/user-event';

const totalProps = 5

describe("Properties display", async() => {
  it("All properties displayed by default", () => {
    const form = render(<SearchForm />)

    const propContainer = form.container.querySelector('#properties-container')
    expect(propContainer?.children.length).toBe(totalProps)
  })

  it("When there is no properties display No Results container", async () => {
    const form = render(<SearchForm />)

    const user = userEvent.setup()
    const searchInput = form.getByLabelText('search-input')
    await user.type(searchInput, "abc123")

    expect(form.container.querySelector('#no-results') !== null).toBe(true)
  })
})
