export default function RenderHeadings({ headings, currentDepth = 1 }) {
  // Helper function that builds a nested list and returns the next index to process.
  function renderHeadingsAtIndex(startIndex, depth) {
    const items = [];
    let i = startIndex;
    while (i < headings.length && headings[i].depth >= depth) {
      const heading = headings[i];
      i++;
      let nested = null;
      // If the next heading is deeper, recursively process nested headings.
      if (i < headings.length && headings[i].depth > heading.depth) {
        const result = renderHeadingsAtIndex(i, heading.depth + 1);
        nested = result.items;
        i = result.nextIndex;
      }
      // Use a key that combines the slug and index to ensure uniqueness.
      items.push(
        <li key={`${heading.slug}-${i}`}>
          <a href={`#${heading.slug}`}>{heading.text}</a>
          {nested && nested.length > 0 && <ul>{nested}</ul>}
        </li>
      );
    }
    return { items, nextIndex: i };
  }

  const { items } = renderHeadingsAtIndex(0, currentDepth);
  return items;
}
