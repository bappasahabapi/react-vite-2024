`npm run dev`

## 8. React Props

<aside>
✅ **আমরা বাহিরে থেকে যা পাঠাই তা হলো props। props is an object which is referance value**

</aside>

<aside>
✅ React components use *props* to **communicate** with each other

প্রতিটি parent কম্পোনেন্ট **প্রপার্টিস** দেয়ার মাধ্যমে তার child কম্পোনেন্টগুলিকে কিছু **তথ্য** পাঠাতে পারে। 
Props আপনাকে এইগুলি HTML attribute মধ্যে মনে করতে পারে, 

but you can **pass any JavaScript value through them**, including objects, arrays, and functions.

</aside>

```jsx
function Avatar({ person, size = 100 }) {
  // ...
}
```

Now, if `<Avatar person={...} />` is rendered with no `size` prop, the `size` will be set to `100`.

The default value is only used if the `size` prop is missing or if you pass `size{undefined}`. But if you pass `size={null}` or `size={0}`, the default value will **not** be used.

- **লেআউটিং** করার সময়ে **children** props বেশি ব্যবহৃত হয়।”
- Props are **Immutable and** props are not always **static**

"props ইমিউটেবল করা হয়েছে কারণ এগুলি every time parent theke নতুন অবজেক্ট child e পাঠায় এবং পূর্বের রেফারেন্স অবজেক্টটি গার্বেজ হিসেবে মুছে ফেলা হয়।”