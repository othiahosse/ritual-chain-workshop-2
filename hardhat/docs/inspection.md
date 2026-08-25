# Market Inspection

I wanted a quick way to look at a market without thinking
about the whole contract every time.

The small inspector shows:

- market ID
- target
- resolution block
- YES pool
- NO pool
- total pool
- larger side

It also calculates how many blocks remain until resolution.

I intentionally kept this read-only.

The goal is not to build a frontend. It is just a small
learning tool while looking at the workshop.

This helped me connect the values stored by the contract
with the behavior described in the README.
