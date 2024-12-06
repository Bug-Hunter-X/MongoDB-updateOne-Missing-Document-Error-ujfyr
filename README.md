# MongoDB updateOne Missing Document Error

This example demonstrates a common issue with MongoDB's `updateOne` method. When a document doesn't exist and the `upsert` option is not set to `true`, the `updateOne` method silently fails to create a new document, leading to unexpected behavior.  The solution shows how to add `upsert: true` to fix it.

## Bug
The original code attempts to update a document using `updateOne`. If the document doesn't exist, the operation fails silently.

## Solution
The solution adds the `upsert: true` option to the `updateOne` operation. This ensures that if the document doesn't exist, a new document is created with the provided update.