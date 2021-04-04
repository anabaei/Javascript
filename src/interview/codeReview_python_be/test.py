# coding=utf-8

import router
######### ths one not handling anything sts
def test_handleRouting():
        assert router.HandleRouting('nonsense/path') == {"error": "unknown_method"}