import React from "react";

const User = () => {
    return (
        <>
            <p className="mb-2">Tất cả sản phẩm</p>
            <div className="flex flex-col gap-2">
                <div className="hidden md:grid grid-cols-[2fr_1fr_2fr_2fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
                    <b>Email</b>
                    <b>Tên</b>
                    <b>Số điện thoại</b>
                    <b>Địa chỉ</b>
                    <b>Hành động</b>
                </div>
            </div>
        </>
    );
};

export default User;
